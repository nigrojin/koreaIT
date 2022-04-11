const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use('/static', express.static(path.resolve(__dirname, 'public')));

app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});

app.listen(port, () => {
    console.log('작동중인 포트: ' + port)
})