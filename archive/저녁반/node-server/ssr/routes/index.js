var express = require('express');
var router = express.Router();
var fs = require('fs');

// READ
router.get('/', (req, res, next) => {
  fs.readdir('data/', (err, posts) => {
    // console.log(posts)
    res.render('index', { title: 'Blog', posts: posts })
  })
});

router.get('/p/:postId', (req, res, next) => {
  // console.log(req.params.postId)
  // fs.readFile(읽을 파일명, callback)
  fs.readFile(`data/${req.params.postId}`, (err, content) => {
    if (err) {
      return console.error(err);
    }
    const post = { title: req.params.postId, content }
    res.render('blog_detail', { title: 'Blog', post })
  })
})

router.get('/about', (req, res, next) => {
  res.render('about', { title: 'About' })
})

// CREATE
router.get('/create', (req, res, next) => {
  res.render('blog_form', { title: 'Blog Form' })
})

router.post('/create', (req, res, next) => {
  // return console.log(req.body)
  // 새로운 파일을 만든다
  // fs.appendFile(새로운 파일 이름, 새로운 파일 내용, callback)
  fs.appendFile(`data/${req.body.title}.txt`, req.body.content, (err) => {
    if (err) {
      return console.error(err)
    }
    res.redirect('/');
  })
})

// UPDATE
router.get('/p/:postId/update', (req, res, next) => {
  // console.log(req.params.postId)
  fs.readFile(`data/${req.params.postId}`, (err, content) => {
    if (err) {
      return console.error(err)
    }
    const post = { title: req.params.postId, content }
    res.render('blog_form', { title: 'Update Form', post })
  })
})

router.post('/p/:postId/update', (req, res, next) => {
  console.log(req.body)

  // fs.rename(이전 제목, 새로운 제목, callback)
  fs.rename(`data/${req.body.ex_title}`, `data/${req.body.title}.txt`, (err, content) => {
    if (err) {
      return console.error(err)
    }

    // fs.appendFile(파일제목, 파일 내용, callback): 이미 파일이 존재하면 추가한다
    // fs.writeFile(파일 제목, 파일 내용, callback): 이미 파일이 존재하면 대체한다
    fs.writeFile(`data/${req.body.title}.txt`, req.body.content, err => {
      if (err) {
        return console.error(err)
      }
      res.redirect(`/p/${req.body.title}.txt`)
    })
  })
})

// DELETE
router.post('/p/:postId/delete', (req, res, next) => {
  // console.log(req.params.postId)
  // fs.unlink(삭제할 파일, callback)
  fs.unlink(`data/${req.params.postId}`, (err) => {
    if (err) {
      return console.error(err)
    }
    // 클라이언트에게 json 데이터를 전송한다
    res.json({ message: 'success' })
  })
})

module.exports = router;


