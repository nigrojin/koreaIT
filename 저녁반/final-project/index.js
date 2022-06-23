const express = require('express');
const app = express();
const port = 3000;
// cross origin 요청 허가
const cors = require('cors');
// ODM 패키지
const mongoose = require('mongoose');
// req.body를 받는다.
const cookieParser = require('cookie-parser');
// 암호화, 로그인 토큰 발급 등
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
// 유저 인증을 하는 패키지
const passport = require('passport');
const passportJwt = require('./auth/passportJwt');
const auth = passport.authenticate('jwt', { session: false });
// form 데이터를 파싱한다(특히 파일에 특화되어 있다)
const formidable = require('formidable');
// NodeJS에서 파일 핸들링
const fs = require('fs');

// # app.use() 미들웨어
// 유틸리티 기능들
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(cors())
// express에서 정적파일 제공
app.use(express.static('public'));
app.use(express.static('data'));

// # 데이터베이스 연결
mongoose.connect('mongodb://127.0.0.1:27017/final', // url
    { useNewUrlParser: true, useUnifiedTopology: true  } // options
)
const { User, Follow, Article, Favorite, Comment, Token } = require('./models/model');

// # UserException 클래스
function UserException(message) {
    this.name = 'UserException';
    this.message = message;

    this.toString = () => {
        return this.name + ': ' + this.message;
    }
}

// # 라우팅
app.get('/', (req, res, next) => {
    try { // 여기서는 코드를 마음껏 작성한다

        setTimeout(() => {
            res.json('hello world');
        }, 3000)
        
    } catch (error) { // 여기서 에러를 처리한다
        next(error)
    }
    // # 런타임 에러, 예외, 유효한 코드에서 발생
    // es.json('hello world') => res를 es로 잘못 적은 에러 

    // # parse-time 에러, try catch로 복구 불가
    // res.json('hello world' => )를 빼먹은 에러 
})

app.get('/user', auth, async (req, res, next) => {
    try {
        // req.user: 로그인한 유저가 담긴다.
        res.json(req.user);
    } catch (error) {
        next(error)
    }
})

// # 로그인, 회원가입
app.post('/user/login', async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email, active: true });
        // 가입된 사용자인지 확인한다
        if (!user) {
            // return res.json({ message: '사용자를 찾을 수 없습니다' })
            throw new UserException('사용자를 찾을 수 없습니다')
        }
        // 로그인 시에 받은 비밀번호와 user의 비밀번호를 비교한다
        const hashedPassword = crypto.pbkdf2Sync(req.body.password, user.salt, 310000, 32, 'sha256')
        .toString('hex')

        if (user.password !== hashedPassword) {
            // return res.json({ message: '비밀번호가 일치하지 않습니다' })
            throw new UserException('비밀번호가 일치하지 않습니다')
        }

        const token = jwt.sign({ username: user.username }, 'shhhhh');
        
        res.json({ user, token }); // ({ user: user, token: token })
    } catch (error) {
        // UserException은 다른 방식으로 처리 (200)
        if (error instanceof UserException) {
            return res.json(error)
        }
        next(error)
    }
})

app.post('/validate', async (req, res, next) => {
    try {
        const newUser = req.body;
        console.log(newUser);

        const username = await User.findOne({ username: newUser.username, active: true })
        const email = await User.findOne({ email: newUser.email, active: true })

        const validation = {
            username: { pass: false, message: null },
            email: { pass: false, message: null },
            password: { pass: false, message: null },
            passwordConfirm: { pass: false, message: null }
        }

        if (newUser.username !== undefined) {
            if (newUser.username === '') {
                validation.username.message = '사용자 이름을 입력하세요'
            } else if (username) {
                validation.username.message = '이미 가입된 사용자 이름입니다'
            } else if (newUser.username.match(/[a-z]{5,}/) === null) {
                validation.username.message = '소문자 알파벳으로 5글자이상 입력하세요'
            } else {
                validation.username.pass = true
                validation.username.message = '가입할 수 있는 사용자 이름입니다'
            }
        }

        if (newUser.email !== undefined) {
            if (newUser.email === '') {
                validation.email.message = '이메일을 입력하세요'
            } else if (email) {
                validation.email.message = '이미 사용중인 이메일입니다'
            } else if (newUser.email.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/) === null) {
                validation.email.message = '유효하지 않은 이메일입니다'
            } else {
                validation.email.pass = true
                validation.email.message = '사용 가능한 이메일입니다'
            }
        }

        if (newUser.password !== undefined) {
            if (newUser.password === '') {
                validation.password.message = '비밀번호를 입력하세요'
            } else if (newUser.password.match(/.{8,}/) === null) {
                validation.password.message = '8글자 이상 입력하세요'
            } else {
                validation.password.pass = true
                validation.password.message = '안전한 비밀번호입니다'
            }
        }

        if (newUser.password_confirm !== undefined) {
            if (newUser.password_confirm === '') {
                validation.passwordConfirm.message = '비밀번호를 다시한번 입력하세요'
            } else if (newUser.password !== newUser.password_confirm) {
                validation.passwordConfirm.message = '비밀번호가 일치하지 않습니다'
            } else {
                validation.passwordConfirm.pass = true;
                validation.passwordConfirm.message = '비밀번호가 일치합니다'
            }
        }

        res.json(validation);

    } catch (error) {
        next(error)
    }
})

app.post('/users', async (req, res, next) => {
    try {
        // 검증이 끝나고 비밀번호를 암호화 한다
        const salt = crypto.randomBytes(16).toString('hex');
        // 암호화된 비밀번호
        const hashedPassword = crypto.pbkdf2Sync(req.body.password, salt, 310000, 32, 'sha256')
        .toString('hex');
    
        const user = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
            salt: salt
        })
    
        // 새로운 유저를 데이터베이스에 저장한다
        await user.save()
    
        res.json(user)

    } catch (error) {
        next(error)
    }
})

// # 게시물 (article)
app.post('/articles', auth, async (req, res, next) => { // auth에서 권한을 검사한다
    try { // try...catch 는 동기적으로 작동한다
        const form = formidable({ multiples: true }); 
    
        form.parse(req, async (err, fields, files) => {
            try {
                // photo 파일
                // 사진이 1개 일때도 Array 타입으로 만든다.
                const photos = files.photos instanceof Array ? files.photos : new Array(files.photos);
                const user = await User.findById(req.user._id);

                if (!photos[0].originalFilename) {
                    throw new Error('이미지를 한장 이상 업로드하세요');
                }

                const photoArray = photos.map(photo => {
                    // 이미지의 개수만큼 /data/posts/ 에 이미지를 업로드한다.
                    const oldpath = photo.filepath;
                    const ext = photo.originalFilename.split('.')[1];
                    const newName = photo.newFilename + '.' + ext;
                    const newpath = __dirname + '/data/posts/' + newName;
            
                    fs.renameSync(oldpath, newpath);
                    // 새로운 파일이름을 return한다
                    return newName;
                })

                const article = new Article({
                    description: fields.description,
                    photos: photoArray,
                    author: user._id
                })
        
                await article.save();
        
                res.json(article);
            } catch (error) {
                next(error)
            }
        })
    } catch (error) {
        next(error)
    }
})

app.get('/articles', async (req, res, next) => {
    try {
        // 특정한 유저의 게시물을 가져온다
        if (req.query.username) { // GET 요청에서만 사용할 수 있다
            const user = await User.findOne({ username: req.query.username })
            const articles = await Article.find({ author: user._id }).populate('author')

            res.json(articles)
        // 전체 게시물을 가져온다
        } else {
            const articles = await Article.find().populate('author');
            res.json(articles)
        }
    } catch (error) {
        next(error)
    }
})

app.get('/articles/:postId', async (req, res, next) => {
    try {
        // Error Object
        // { name, message }
        // name: EvalError, RangeError, ReferenceError, SyntaxError, TypeError, URIError
        // CastError (Custom error)
        const article = await Article.findById(req.params.postId).populate('author'); 
        res.json(article)
    } catch (error) { // await Promise에서 발생한 에러를 잡는다
        next(error)
    }
})

app.get('/articles/:postId/more', async (req, res, next) => {
    try {
        const article = await Article.findById(req.params.postId).populate('author');
    
        const prevArticle = await Article.findOne({ author: article.author, created: { $lt: article.created } })
        .sort({ created: -1 })
    
        const nextArticle = await Article.findOne({ author: article.author, created: { $gt: article.created } })
    
        res.json({ prevArticle, nextArticle });
    } catch (error) {
        next(error)
    }
})

app.put('/articles/:id', auth, async (req, res, next) => {
    try {
        // id에 일치하는 게시물을 가져온다(수정할 게시물)
        const article = await Article.findById(req.params.id);

        if (article.author.toString() !== req.user._id.toString()) {
            // error.name, error.message
            // error.name: Error, error.message: '게시물을 ...')
            throw new Error('게시물을 작성한 본인만 수정할 수 있습니다.')
        }

        const form = formidable();

        form.parse(req, async (err, fields, files) => {
            try {
                // 사진에 대한 설명을 업데이트한다
                article.description = fields.description
                article.tagList = fields.tagList;
    
                // 수정한 게시물을 저장한다
                await article.save();
    
                res.json(article);
            } catch (error) {
                next(error)
            }
        })

    } catch (error) {
        next(error)
    }
})

app.delete('/articles/:postId', auth, async (req, res, next) => {
    try {
        const article = await Article.findById(req.params.postId);

        if (article.author.toString() !== req.user._id.toString()) {
            throw new Error('게시물을 작성한 사람만 삭제할 수 있습니다')
        }

        await article.delete();

        res.json(req.params.postId);

    } catch (error) {
        next(error)
    }
})

// # 좋아요
app.post('/articles/:postId/favorite', auth, async (req, res, next) => {
    try {
        const article = await Article.findById(req.params.postId);
        // 커스텀 에러, 이미 로그인한 유저가 좋아요를 누른 게시물인지 확인한다
        const favorite = await Favorite.findOne({ user:req.user._id, article: article._id })

        if (favorite) {
            throw new Error('이미 좋아요를 누른 게시물입니다')
        }

        const newFavorite = new Favorite({
            user: req.user._id,
            article: article._id
        })

        // 새로운 좋아요 데이터 저장
        await newFavorite.save();

        // 좋아요를 누른 게시물의 좋아요 수 1 증가
        article.favoriteCount++;
        // 업데이트된 게시물 저장
        await article.save();

        res.json(article)

    } catch (error) {
        next(error)
    }
})

app.get('/articles/:postId/favorite', auth, async (req, res, next) => {
    try {
        const favorite = await Favorite.findOne({ article: req.params.postId, user: req.user._id })
        const isFavorite = favorite ? true : false;

        res.json(isFavorite);
    } catch (error) {
        next(error)
    }
})

app.delete('/articles/:postId/favorite', auth, async (req, res, next) => {
    try {
        const article = await Article.findById(req.params.postId);
        // 로그인한 유저가 좋아요를 누른 데이터를 찾는다
        const favorite = await Favorite.findOne({ user: req.user._id, article: article._id });

        // 커스텀 에러
        if (!article) {
            throw new Error('존재하지 않는 게시물입니다')
        }
        if (!favorite) {
            throw new Error('이미 삭제된 데이터입니다')
        }

        await favorite.delete();

        // 게시물의 좋아요를 1 감소
        article.favoriteCount--;
        // 게시물 업데이트
        await article.save();

        res.json(article)

    } catch (error) {
        next(error)
    }
})

// # 피드
app.get('/feed', auth, async (req, res, next) => {
    try {
        // 로그인한 유저가 followerId인 데이터
        const followingList = await Follow.find({ followerId: req.user._id });
        // 로그인한 유저가 팔로우하는 계정의 id만 추출
        const followingIds = followingList.map(following => following.followingId.toString())
        // 로그인한 유저가 팔로우하는 유저의 게시물
        const articles = await Article.find({ author: followingIds }).populate('author');

        console.log(followingIds)
        res.json(articles)
    } catch (error) {
        next(error)
    }
})

// # 팔로우
app.post('/profiles/:username/follow', auth, async (req, res, next) => {
    try {
        const user = await User.findOne({ username: req.params.username });
        // 이미 팔로우 하는 지 확인
        const isFollowing = await Follow.findOne({ followerId: req.user._id, followingId: user._id });

        if (isFollowing) {
            // 커스텀 에러
            throw new Error('이미 팔로우합니다');
        }
        if (req.user._id.toString() === user._id.toString()) {
            // 커스텀 에러
            throw new Error('자신을 팔로우할 수 없습니다')
        }

        const following = new Follow({
            followerId: req.user._id,
            followingId: user._id
        })

        await following.save();

        res.json(following);

    } catch (error) {
        next(error)
    }
})

app.get('/profiles/:username/isFollowing', auth, async (req, res, next) => {
    try {
        const user = await User.findOne({ username: req.params.username });
        const following = await Follow.findOne({ followerId: req.user._id, followingId: user._id })
        // 팔로잉을 하는지
        const isFollowing = following ? true : false;

        res.json(isFollowing);
    } catch (error) {
        next (error)
    }
})

app.get('/profiles/:username/followerList', auth, async (req, res, next) => {
    try {
        const user = await User.findOne({ username: req.params.username });
        // find(): Array을 리턴한다
        // populate() ref(User)에 작성한 컬렉션을 참고하여 id값이 일치하는 데이터를 가져온다
        const followerList = await Follow.find({ followingId: user._id }).populate('followerId');
    
        res.json(followerList)
    } catch (error) {
        next(error)
    }
})

app.get('/profiles/:username/followingList', auth, async (req, res, next) => {
    try {
        const user = await User.findOne({ username: req.params.username })
        const followingList = await Follow.find({ followerId: user._id }).populate('followingId')
    
        res.json(followingList)
    } catch (error) {
        next(error)
    }
})

app.delete('/profiles/:username/follow', auth, async (req, res, next) => {
    try {
        const user = await User.findOne({ username: req.params.username });
        const following = await Follow.findOne({ followerId: req.user._id, followingId: user._id });

        await following.delete();

        res.json(user)

    } catch (error) {
        next(error)
    }
})

// # Profile
app.post('/profiles/edit', auth, async (req, res, next) => {
    try {
        const form = formidable();

        form.parse(req, async (err, fields, files) => {
            try {
                const image = files.image;
                const user = await User.findById(req.user._id);

                // 사용자가 이미지를 업로드하는 경우
                if (image && image.originalFilename) {
                    const oldpath = image.filepath;
                    const ext = image.originalFilename.split('.')[1]
                    const newName = image.newFilename + '.' + ext;
                    const newpath = __dirname + '/data/user/' + newName;

                    fs.renameSync(oldpath, newpath);
                    // 유저 이미지 업데이트
                    user.image = newName;
                }

                // 유저 bio 업데이트
                user.bio = fields.bio;

                // 업데이트된 user를 저장
                await user.save();
                
                res.json({ user, fields, files });

            } catch (error) {
                next(error)
            }
        })
    } catch (error) {
        next(error)
    }
})

app.get('/profiles/:username', async (req, res, next) => {
    try {
        console.log(req.params.username);

        const user = await User.findOne({ username: req.params.username });
        
        if (!user) {
            throw new Error('존재하지 않는 사용자입니다');
        }

        // user에서 username, bio, image로 profile 객체를 만든다.
        const profile = {
            username: user.username,
            bio: user.bio,
            image: user.image
        }

        res.json(profile)

    } catch (error) {
        next(error)
    }
})

// # 사용자 검색
app.get('/users', auth, async (req, res, next) => {
    try {
        // 새로운 정규식 패턴을 만든다
        const patt = new RegExp('^' + req.query.username);
        // $regex: mongoose에서 정규식을 사용하는 방식
        const users = await User.find({ username: { $regex: patt } });

        res.json(users)
    } catch (error) {
        next(error)
    }
})

// # 댓글
app.post('/articles/:postId/comments', auth, async (req, res, next) => {
    try {
        const article = await Article.findById(req.params.postId);

        const comment = new Comment({
            content: req.body.content,
            article: req.params.postId,
            user: req.user._id
        })

        if (!article) {
            throw new Error('존재하지 않는 게시물입니다')
        }

        await comment.save();

        res.json(comment)
    } catch (error) {
        next(error)
    }
})

app.get('/articles/:postId/comments', auth, async (req, res, next) => {
    try {
        const comments = await Comment.find({ article: req.params.postId }).populate('user');

        res.json(comments)
    } catch (error) {
        next(error)
    }
})

app.delete('/articles/:postId/comments/:commentId', auth, async (req, res, next) => {
    try {
        const comment = await Comment.findById(req.params.commentId);

        if (req.user._id.toString() !== comment.user.toString()) {
            throw new Error('댓글 작성자만 삭제할 수 있습니다')
        }

        await comment.delete();

        res.json(req.params.commentId)

    } catch (error) {
        next(error)
    }
})

// 에러 핸들러
app.use((err, req, res, next) => {
    res.status(500).json({ name: err.name, message: err.message }) // Internal Server Error(500)
    console.error(err)
})

app.listen(port, () => {
    console.log(`${port} 포트에서 실행중..`)
})