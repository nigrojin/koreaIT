const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser')

// # app.use() 미들웨어
// 유틸리티 기능들
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(cors())

// # 데이터베이스 연결
mongoose.connect('mongodb://127.0.0.1:27017/final', // url
    { useNewUrlParser: true, useUnifiedTopology: true  } // options
)
const { User, Follow, Articles, Favorite, Comment, Token } = require('./models/model');

// # 라우팅
app.get('/', (req, res) => {
    res.json('hello world');
})

app.post('/users', async (req, res, next) => {

    const user = new User({
        username: req.body.username,
        email: req.body.email,
        bio: req.body.bio,
        image: req.body.image,
        password: req.body.password
    })

    user.save().then(() => {
        res.json({ message: user })
    })
})


app.listen(port, () => {
    console.log(`${port} 포트에서 실행중..`)
})