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
app.use(express.static('public'))
app.use(express.static('data'))

// # 데이터베이스 연결
mongoose.connect('mongodb://127.0.0.1:27017/final', // url
    { useNewUrlParser: true, useUnifiedTopology: true  } // options
)
const { User, Follow, Article, Favorite, Comment, Token } = require('./models/model');

// # 라우팅
app.get('/', (req, res, next) => {
    try { // 여기서는 코드를 마음껏 작성한다
        res.json('hello world');
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
            return res.json({ message: '사용자를 찾을 수 없습니다' })
        }
        // 로그인 시에 받은 비밀번호와 user의 비밀번호를 비교한다
        const hashedPassword = crypto.pbkdf2Sync(req.body.password, user.salt, 310000, 32, 'sha256')
        .toString('hex')

        if (user.password !== hashedPassword) {
            return res.json({ message: '비밀번호가 일치하지 않습니다' })
        }

        const token = jwt.sign({ username: user.username }, 'shhhhh');
        
        res.json({ token: token })
    } catch (error) {
        next(error)
    }
})

app.post('/users', async (req, res, next) => {
    try {
        // 입력받은 아이디로 회원을 찾는다
        const username = await User.findOne({ username: req.body.username, active: true });
        const email = await User.findOne({ email: req.body.username, active: true })
    
        console.log(username)
        
        // 이미 가입된 아이디 인 경우
        if (username) {
            return res.json({ message: '이미 가입된 아이디입니다' })
        }
        // username이 없으면
        if (!req.body.username) { // username === undefined or username === ''
            return res.json({ message: '아이디는 필수입니다' })
        }
        // 아이디 검증
        if (req.body.username.match(/[a-z]{5,}/) === null) {
            return res.json({ message: '아이디는 영어 소문자, 5글자 이상으로 입력해야 합니다' })
        }
        
        // 이메일 확인
        if (email) { // {}, [], { email: 'bunny@example.com' } => true
            return res.json({ message: '이미 가입된 이메일입니다' })
        }
        if (!req.body.email) {
            return res.json({ message: '이메일은 필수입니다' })
        }
        if (req.body.email.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/) === null) {
            return res.json({ message: '올바른 형식의 이메일이 아닙니다' })
        }
    
        // 비밀번호 확인
        if (!req.body.password) {
            return res.json({ message: '비밀번호를 필수입니다' })
        }
        if (req.body.password.match(/.{8,}/) === null) {
            return res.json({ message: '비밀번호가 안전하지 않습니다' })
        }
    
        // 비밀번호 재입력 확인
        if (!req.body.password_confirm) {
            return res.json({ message: '비밀번호를 다시한번 입력하세요' })
        }
        
        if (req.body.password !== req.body.password_confirm) {
            return res.json({ message: '비밀번호가 일치하지 않습니다' })
        }
    
        // 검증이 끝나고 비밀번호를 암호화 한다
        const salt = crypto.randomBytes(16).toString('hex');
        // 암호화된 비밀번호
        const hashedPassword = crypto.pbkdf2Sync(req.body.password, salt, 310000, 32, 'sha256')
        .toString('hex')
    
    
        const user = new User({
            username: req.body.username,
            email: req.body.email,
            bio: req.body.bio,
            image: req.body.image,
            password: hashedPassword,
            salt: salt
        })
    
        // 새로운 유저를 데이터베이스에 저장한다
        await user.save()
    
        res.json({ message: user })

    } catch (error) {
        next(error)
    }
})

// # 게시물 (article)
app.post('/articles', auth, async (req, res, next) => { // auth에서 권한을 검사한다
    try { // try...catch 는 동기적으로 작동한다
        const form = formidable();
    
        form.parse(req, async (err, fields, files) => {
            try {
                // photo 파일
                const photo = files.photo;
                // req.user값으로 DB에서 user를 찾는다
                // SQL(Structured Query Language, 데이터베이스의 언어)
                // SQL을 이용하는 경우: SELECT * FROM User where id= ? (MySQL)
                // ODM (Object Document Model): JavaScript의 언어로 Query를 요청할 수 있다
                const user = await User.findById(req.user._id);
        
                // 파일을 핸들링하는 하는 부분
                // 파일이 임시 저장되는 폴더
                const oldpath = photo.filepath;
                // 이미지의 확장자(extenstion)
                // bunny.jpg => jpg ['bunny', 'jpg']
                const ext = photo.originalFilename.split('.')[1];
                const newName = photo.newFilename + '.' + ext;
                // __dirname: 서버의 루트 폴더 (final-project/)
                const newpath = __dirname + '/data/posts/' + newName;
        
                // 파일을 서버에 저장한다
                fs.renameSync(oldpath, newpath)
        
                // 새로운 게시글을 만든 뒤 저장한다
                const article = new Article({
                    description: fields.description,
                    photos: newName,
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
        const articles = await Article.find();
        res.json(articles)
    } catch (error) {
        next(error)
    }
})

app.get('/articles/:postId', async (req, res, next) => {
    try {
        // Error Object
        // { name, message }
        // name: EvalError, RangeError, ReferenceError, SyntaxError, TypeError, URIError
        const article = await Article.findById('sdf'); // CastError (Custom error)
        res.json(article)
    } catch (error) { // await Promise에서 발생한 에러를 잡는다
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

// 에러 핸들러
app.use((err, req, res, next) => {
    res.status(500).json({ name: err.name, message: err.message }) // Internal Server Error(500)
    console.error(err)
})

app.listen(port, () => {
    console.log(`${port} 포트에서 실행중..`)
})