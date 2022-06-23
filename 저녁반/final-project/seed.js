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

        fs.copyFileSync(`${__dirname}/seeds/profiles/${image}`, `${__dirname}/data/users/${newName}`);

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

const username = 'bunny'

const r = new RegExp("^" + username); // regular expression (정규식)

console.log(r) // RegExp: /^bunny/

// let patt = /^bunny/ // literal 방식 (value만 쓴다)
// let user = 'bunny' // literal 방식



