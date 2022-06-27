const { User, Article, Follow } = require("./models/model");
const crypto = require("crypto");
const fs = require("fs");

async function createUser(username, email, password = "123") {
    try {
        const salt = crypto.randomBytes(16).toString("hex");
        const hashedPassword = crypto.pbkdf2Sync(password, salt, 310000, 32, "sha256").toString("hex");

        const imgs = fs.readdirSync(`${__dirname}/seeds/profiles`);
        const image = imgs.find(img => img.match(new RegExp("^" + username)));

        const newName = `${createId()}.${image.split(".")[1]}`;

        fs.copyFileSync(`${__dirname}/seeds/profiles/${image}`, `${__dirname}/data/user/${newName}`);

        const user = new User({
            username,
            email,
            password: hashedPassword,
            salt,
            bio: "안녕 내 이름은 " + username,
            image: newName
        })
        await user.save();
    } catch (error) {
        console.error(error)
    }
}

// 게시물 만드는 함수
async function createArticle(username, postId) {
    try {
        const imgs = fs.readdirSync(`${__dirname}/seeds/${username}/`);
        const user = await User.findOne({ username })
        const userPhotos = imgs.filter(img => img.match(new RegExp("^" + username + postId)));

        const photos = userPhotos.map(photo => {
            const newName = `${createId()}.${photo.split(".")[1]}`;

            fs.copyFileSync(`${__dirname}/seeds/${username}/${photo}`, `${__dirname}/data/posts/${newName}`);

            return newName;
        })

        const article = new Article({
            description: username + "의 게시물",
            photos,
            author: user._id,
            created: Date.now() + 32400000
        })
        await article.save();

    } catch (error) {
        console.error(error)
    }
}

// 팔로잉 만드는 함수
async function createFollowing(follower, following) {
    try {
        const _follower = await User.findOne({ username: follower });
        const _following = await User.findOne({ username: following });

        const newFollowing = new Follow({
            followerId: _follower._id,
            followingId: _following._id
        })
        await newFollowing.save()
    } catch (error) {
        console.error(error)
    }
}

// 24 hex string만드는 함수
function createId() {
    let id = "";

    for (let i=0; i<24; i++) {
        let r = Math.floor(Math.random() * 16);
        id += r.toString(16)
    }

    return id;
}

// Math.round() 반올림
// Math.ceil() 올림
// Math.floor() 내림
// console.log(Math.floor(Math.random() * 10)) // 0이상 10이하의 숫자
// console.log(Math.floor(Math.random() * 16)) // 0이상 16이하의 숫자

// 0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f
// let num = 10;
// number.toString(기수, radix) 10진수를 기수의 형태로 변환
// console.log(num.toString(16));

// 데이터베이스에 데이터를 저장하는 함수
async function plantSeeds() {
    // user먼저 데이터베이스에 저장되어야 한다
    await createUser("bunny", "bunny@example.com");
    await createUser("cat", "cat@example.com");
    await createUser("bird", "bird@example.com");
    await createUser("duck", "duck@example.com")

    await createUser("dog", "dog@example.com")
    await createUser("pug", "pug@example.com")
    await createUser("quokka", "quokka@example.com")
    await createUser("monkey", "monkey@example.com");

    // 팔로잉을 만든다
    await createFollowing("pug", "bunny")
    await createFollowing("bunny", "cat")
    await createFollowing("bunny", "quokka")
    await createFollowing("bunny", "dog");

    // 게시물을 만든다
    await createArticle("bunny", "1")
    await createArticle("bunny", "2")
    await createArticle("bunny", "3")
    await createArticle("cat", "1")
    await createArticle("cat", "2")
    await createArticle("cat", "3")
    await createArticle("cat", "4")
    await createArticle("bird", "1")
    await createArticle("duck", "1")
    await createArticle("duck", "2")
    await createArticle("duck", "3")
    await createArticle("dog", "1")
    await createArticle("dog", "2")
    await createArticle("dog", "3")
    await createArticle("dog", "4")
    await createArticle("pug", "1")
    await createArticle("pug", "2")
    await createArticle("pug", "3")
    await createArticle("quokka", "1");
    await createArticle("quokka", "2");
    await createArticle("quokka", "3");
    await createArticle("monkey", "1");
    await createArticle("monkey", "2");
    await createArticle("monkey", "3");

    console.log("Seeds are successfully planted")
}

// plantSeeds()

console.log(__dirname)

// async function f() {}

// console.log(f()) // Promise를 return한다.


// fs.readdirSync(direction): direction을 읽는 method;
// const r = fs.readdirSync(`${__dirname}/seeds/profiles`);

// console.log(r);

// let username = 'bunny';

// const imgs = fs.readdirSync(`${__dirname}/seeds/profiles`);
// const image = imgs.find(img => img.match(new RegExp("^" + username)));

// console.log(imgs)
// console.log(image) // bunny.jpeg

// imgs.map(img => console.log(img))

// const r = imgs.filter(img => {
//     if (img === 'bunny.jpeg') {
//         return img;
//     }
// })

// console.log(r) // ['bunny.jpeg']

// const r = imgs.filter(img => {
//     if (img.match(/^b/)) { // b로 시작하는 value
//         return img;
//     }
// })

// console.log(r)

// const r = imgs.filter(img => img.match(/^b/))
// console.log(r)

// find(): 일치하는 value가 있으면 value만 return하고 작동을 중지한다
// const r = imgs.find(img => img.match(/^b/));
// console.log(r)

// const username = 'bunny'

// const r = new RegExp("^" + username); // regular expression (정규식)

// console.log(r) // RegExp: /^bunny/

// let patt = /^bunny/ // literal 방식 (value만 쓴다)
// let user = 'bunny' // literal 방식



