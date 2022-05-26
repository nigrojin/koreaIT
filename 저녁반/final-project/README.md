
# API

## GET (Read)
/ - feed
/login - 로그인페이지
/account/signup - 회원가입
/profiles/:username - 유저페이지
/profiles/:username/follower 팔로워 리스트
/profiles/:username/following 팔로잉 리스트
/p/:postId - 게시물 페이지
/comments - 댓글
/explore - 랜덤게시물 보기

## POST (Create)
/user/login - 로그인
/users - 회원가입 
/profiles/:username/follow 사용자 팔로우
/articles - 게시물 등록
/articles/:postId/favorite - 좋아요 추가
/articles/:postId/comments - 댓글 등록

## PUT (Update)
/articles/:postId - 게시물 업데이트
/articles/:postId/comments/:commmentId - 댓글 업데이트

## DELETE (Delete)
/profiles/:username/follow - 팔로우 취소


## 설치할 패키지
npm i mongoose