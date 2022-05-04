const express = require('express');
const path = require('path')
const app = express();
const port = 3000;

// express에서 정적 파일 제공
app.use('/static', express.static(path.resolve(__dirname, 'public')));

// 라우팅
app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.listen(port, () => {
  console.log('Example app listening on port ' + port)
})