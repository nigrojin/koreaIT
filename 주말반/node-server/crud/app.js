// 패키지를 불러온다
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// 라우터
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


// 패키지 사용
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// express.static: 프로젝트 폴더 내에서 정적파일(static)을 제공하는 폴더를 설정한다
app.use(express.static(path.join(__dirname, 'public')));

// 라우터 적용
app.use('/', indexRouter);
app.use('/users', usersRouter);

// 에러 코드는 가장 하단에 작성한다
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  // error의 message는 전달받은 error의 message
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  // 전달받은 error의 status code가 있으면 그 code를 쓰고
  // 없으면 500 (Internal Server Error)
  res.status(err.status || 500);
  // error페이지를 렌더링한다
  res.render('error');
});

module.exports = app;
