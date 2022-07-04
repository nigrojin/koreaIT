import React, { useState, useEffect, useRef, useContext, createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Outlet, Link, 
  useParams, Navigate, useNavigate, useLocation } from "react-router-dom";
import './index.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faPen, faPow, faMagnifyingGlass, faDog, faCompass, faHouse, faEllipsisVertical, faArrowRightFromBracket }
from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart, faComment as farComment } from "@fortawesome/free-regular-svg-icons";

function App() {
  console.log('App Loaded!');

  return (
    <div className="mx-auto pb-5" style={{ maxWidth: "350px" }} >
      <AuthProvider>
        <Router>
          <Routes>
            {/* 로그인 필요 */}
            <Route path="/" element={<AuthRequired><Layout /></AuthRequired>}>
              <Route index element={<Home />} />
              <Route path="create" element={<CreateArticle />} />
              <Route path="explore" element={<Explore />} />
              <Route path="search" element={<Search />} />
              <Route path="/p/:postId">
                <Route index element={<PostView />} />
                <Route path="update" element={<UpdateArticle />} />
                <Route path="comments" element={<Comments />} />
              </Route>
              <Route path="/profiles/:username">
                <Route index element={<Profile />} />
                <Route path="edit" element={<ProfileEdit />} />
                <Route path="follower" element={<FollowerList />} />
                <Route path="following" element={<FollowingList />} />
              </Route>
            </Route>
            {/* 로그인 필요하지 않음 */}
            <Route path="account/signup" element={<SignUp />} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  )
}

const AuthContext = createContext();

function AuthProvider(props) {
  console.log('AuthProvider Loaded!');

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [user, setUser] = useState(null);

  // 처음 접속했을때 = 새로고침
  useEffect(() => {
    // 서버에 토큰을 보내서 유저 정보를 요청한다.
    fetch('http://localhost:3000/user', {
      headers: { 'Authorization': 'Bearer ' + localStorage.getItem('jwt'), }
    })
    .then(res => {
      if (res.status === 401) {
        return null;
      }
      if (!res.ok) {
        throw res;
      }
      return res.json();
    })
    .then(data => setUser(data))
    .catch(error => setError(error))
    .finally(() => setIsLoaded(true))
  }, [])

  // 로그인
  function signIn(newUser, callback) {
    setUser(newUser);
    callback();
  }

  function logOut() {
    localStorage.removeItem('jwt');
    setUser(null);
  }

  console.log(user);

  const value = { user, signIn, logOut } // { user: user, signIn: signIn, logOut: logOut }

  if (error) {
    return <h1>Error!</h1>
  }
  if (!isLoaded) {
    return <h1>Loading...</h1>
  }
  return (
    <AuthContext.Provider value={value}>
      {props.children}
    </AuthContext.Provider>
  )
}

function AuthRequired(props) {
  console.log('AuthRequired Loaded!');

  const auth = useContext(AuthContext);

  if (!auth.user) {
    return <Navigate to="/login" replace />
  }

  console.log(auth);

  return props.children;
}

function Layout() {
  console.log('Layout Loaded!');

  const auth = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      {/* Header */}
      <div className="py-3 border-bottom">
        <div className="flex justify-content-between">
          <button className="btn-link" onClick={() => navigate(-1)}>&larr; Back</button>
          <div className="fs-3">AnimalFriends</div>
        </div>
      </div>

      {/* Navigation */}
      <div className="fixed-bottom border-top bg-white">
        <div className="flex flex-equal py-3">
          <Link to="/" className="text-center">
            <FontAwesomeIcon icon={faHouse} />
          </Link> 
          <Link to="/explore" className="text-center">
            <FontAwesomeIcon icon={faCompass} />
          </Link> 
          <Link to="/create" className="text-center">
            <FontAwesomeIcon icon={faPen} />  
          </Link> 
          <Link to={`/profiles/${auth.user.username}`} className="text-center">
            <FontAwesomeIcon icon={faDog} />  
          </Link> 
        </div>
      </div>

      {/* Contents */}
      <Outlet />
    </>
  )
}

function Home() {
  console.log('Home Loaded!');

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [articles, setArticles] = useState([]);
  const [skip, setSkip] = useState(0);

  useEffect(() => {
    setIsLoaded(false);

    fetch(`http://localhost:3000/feed?skip=${skip}`, {
      headers: { 'Authorization': `Bearer ${localStorage.getItem('jwt')}` }
    })
    .then(res => {
      if (!res.ok) {
        throw res;
      }
      return res.json()
    })
    .then(data => {
      setArticles([...articles, ...data])
    })
    .catch(error => {
      setError(error)
    })
    .finally(() => setIsLoaded(true));
  }, [skip])

  console.log(articles)
  
  if(error) {
    return <h1>Error!</h1>
  } 
  return (
    <>
      {articles.map((article, index) => (
        <div key={index} className="my-3">
          {/* PostItem 컴포넌트를 반복적으로 return한다 */}
          <PostItem article={article} isFavorite={article.isFavorite} />
        </div>
      ))}

      {!isLoaded ? 
        <LoadingInline />
        :       
        <div className="my-3">
          <button className="btn w-100" onClick={() => setSkip(skip + 3)}>더보기</button>
        </div>
      }
    </>
  )
}

function PostView() {
  console.log('PostView Loaded!');

  const params = useParams();
  const postId = params.postId;

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  // 게시물을 담을 변수
  const [article, setArticle] = useState(null);
  // 해당 게시물을 사용자가 좋아하는 게시물인지 여부
  const [isFavorite, setIsFavorite] = useState(null);
  const [articles, setArticles] = useState([]);

  console.log(isLoaded)

  // 순회 가능한 객체(Array)에 주어진 모든 프로미스가 이행된 후,
  // 주어진 프로미스중 하나라도 거부되는 경우 error 발생
  useEffect(() => {
    // 컴포넌트가 다시 렌더링이 될 때 isLoaded를 false로 한다
    setIsLoaded(false);

    Promise.all([
      fetch(`http://localhost:3000/articles/${postId}`),
      fetch(`http://localhost:3000/articles/${postId}/favorite`, {
        headers: { 'Authorization': 'Bearer ' + localStorage.getItem('jwt') }
      }),
      fetch(`http://localhost:3000/articles/${postId}/more`)
    ])
    .then(responses => {
      responses.map(response => {
        if (!response.ok) {
          throw response;
        }
      })
      return Promise.all(responses.map(response => response.json()))
    })
    .then(data => {
      setArticle(data[0])
      setIsFavorite(data[1])
      setArticles(data[2])
    })
    .catch(error => setError(error))
    .finally(() => setIsLoaded(true))
  }, [postId])
  // postId가 바뀔 때 useEffect가 effect(callback)을 다시 호출한다

  console.log(article)
  console.log(isFavorite)
  console.log(articles)

  if (error) {
    return <h1>Error!</h1>
  } 
  if (!isLoaded) {
    return <h1>Loading...</h1>
  }
  return (
    <>
      <PostItem article={article} isFavorite={isFavorite} />
      {/* 이전글, 다음글 버튼은 PostView에서만 보인다 */}
      <div className="flex justify-content-between mt-3">
        {articles.prevArticle &&
          <Link to={`/p/${articles.prevArticle._id}`}>&larr; Prev</Link>
        }
        {articles.nextArticle &&
          <Link to={`/p/${articles.nextArticle._id}`}>Next &rarr;</Link>
        }
      </div>
    </>
  )
}

function PostItem({ article, isFavorite: isFavoriteInitial }) {
  console.log('PostItem Loaded!');

  const auth = useContext(AuthContext);
  // 게시물 작성자와 로그인 유저가 일치하면 Master
  const isMaster = article.author._id === auth.user._id ? true : false;
  const postId = article._id;
  const navigate = useNavigate();

  // db에서 가져온 처음 상태
  const [isFavorite, setIsFavorite] = useState(isFavoriteInitial);
  const [favoriteCount, setFavoriteCount] = useState(article.favoriteCount);

  // Carousel
  // document.querySelectorAll('.item');
  const carouselItems = [];
  const carouselIndicators = [];
  const prevBtn = useRef(null);
  const nextBtn = useRef(null);
  const [left, setLeft] = useState(0);

  const [dropdownActive, setDropdownActive] = useState(false);

  function deleteArticle() {
    let res = window.confirm("삭제하시겠습니까?")

    if (!res) {
      // 취소버튼을 누르면 dropdown이 다시 숨겨진다
      return setDropdownActive(false);
    }

    fetch(`http://localhost:3000/articles/${postId}`, {
      method: 'DELETE',
      headers: { 'Authorization': 'Bearer ' + localStorage.getItem('jwt') }
    })
    .then(res => {
      if (!res.ok) {
        throw res;
      }
      return res.json();
    })
    // replace: true 현재 페이지를 대체한다
    .then(() => navigate('/', { replace: true }))
    .catch(error => alert(error))
  }

  function handleChange() {

    if (!isFavorite) { // 좋아요를 누른다
      fetch(`http://localhost:3000/articles/${postId}/favorite`, {
        method: 'POST',
        headers: { 'Authorization': 'Bearer ' + localStorage.getItem('jwt') }
      })
      .then(res => {
        if (!res.ok) {
          throw res;
        }
        setIsFavorite(true);
        setFavoriteCount(favoriteCount + 1)
      })
      .catch(error => alert("Error!"));
    } else { // 좋아요를 취소한다
      fetch(`http://localhost:3000/articles/${postId}/favorite`, {
        method: 'DELETE',
        headers: { 'Authorization': 'Bearer ' + localStorage.getItem('jwt') }
      })
      .then(res => {
        if (!res.ok) {
          throw res;
        }
        setIsFavorite(false);
        setFavoriteCount(favoriteCount - 1)
      })
      .catch(error => alert("Error!"))
    }
  }

  function setItemRef(ref) {
    // 여러개로 출력되는 carousel item을 carouselItems array에 추가한다
    carouselItems.push(ref);
  }
  function setIndicatorRef(ref) {
    // 여러개로 출력되는 carousel dot을 carouselIndicators array에 추가한다
    carouselIndicators.push(ref)
  }

  useEffect(() => {
    // navigateTo함수가 비동기로 작동해야 하는 이유는
    // useRef가 컴포넌트가 return할 때 element를 current에 담기 때문이다
    // { current: null }

    console.log(carouselItems)
    console.log(carouselIndicators)

    navigateTo(left)
  })
  
  // carousel을 작동하게 하는 함수
  function navigateTo(data) {
    console.log(data)
    console.log(prevBtn)
    console.log(nextBtn)

    carouselItems[0].style.marginLeft = `-${100 * data}%`;

    // active는 display: block으로 만든다.
    prevBtn.current.classList.add('active');
    nextBtn.current.classList.add('active');

    // 마지막 이미지일 때, 다음 버튼을 안보이게 한다
    if (data === carouselItems.length - 1) {
      nextBtn.current.classList.remove('active');
    }

    // 첫번째 이미지일 때, 이전 버튼을 안보이게 한다.
    if (data === 0) {
      prevBtn.current.classList.remove('active');
    }

    // Indicator
    // dot에 .active를 모두 제거한다 (초기화)
    carouselIndicators.map(indicator => {
      indicator.classList.remove('active');
    })
    // index(data)에 해당하는 dot에 .active class를 추가한다
    carouselIndicators[data].classList.add('active');
  }

  const dropdownContent = (
    <ul>
      <li><Link to={`/p/${postId}/update`}>수정</Link></li>
      <li><button className="btn-link" onClick={deleteArticle}>삭제</button></li>
    </ul>
  )

  return (
    <>
      {/* User avatar & 더보기 버튼 */}
      <div className="flex justify-content-between my-2">
        {/* User avatar */}
        <div className="flex">
          <div className="avatar">
            <img src={`http://localhost:3000/user/${article.author.image}`} />
          </div>
          <div className="flex align-center ms-1">
            <Link to={`/profiles/${article.author.username}`}>{article.author.username}</Link>
          </div>
        </div>
        {/* 더보기 버튼 */}
        {isMaster && 
          <button className="btn-link" onClick={() => setDropdownActive(true)}>
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </button>
        }
      </div>

       {/* Carousel Image & button */}
      <div className="relative">   
        <div className="carousel">
          {article.photos.map((photo, index) => (
            <div key={index} className="item" ref={itemRef => setItemRef(itemRef)}>
              <img src={`http://localhost:3000/posts/${photo}`} />
            </div>
          ))}
        </div>
        <div className="carousel-btn-group">
          <button className="prev" onClick={() => setLeft(left - 1)} ref={prevBtn}>&#10094;</button>
          <button className="next" onClick={() => setLeft(left + 1)} ref={nextBtn}>&#10095;</button>
        </div>
      </div>

      {/* Carousel Indicator */}
      <div className="carousel-indicator my-2">
        {article.photos.map((photo, index) => (
          <span className="dot" key={index} ref={setIndicatorRef}></span>
        ))}
      </div>

      {/* 좋아요 & 댓글달기 아이콘 */}
      <div className="flex">
        <button className="btn-link fs-3 flex align-center" onClick={handleChange}>
          {isFavorite ? 
            <FontAwesomeIcon icon={faHeart} className="text-red" />
            :
            <FontAwesomeIcon icon={farHeart} />
          }
        </button>
        <Link to={`/p/${postId}/comments`} className="ms-1 fs-3 flex align-center">
          <FontAwesomeIcon icon={farComment} />
        </Link>
      </div>

      {/* Description */}
      <div>
        <p>좋아요 {favoriteCount}개</p>
        <p className="pre-line">{article.description}</p>
        <small className="text-secondary">
          {article.created}
        </small>
      </div>

      {/* Dropdown */}
      <Dropdown active={dropdownActive} setActive={setDropdownActive} content={dropdownContent} />
    </>
  )
}

function Comments() {
  console.log('Comments Loaded!');

  const params = useParams();
  const postId = params.postId;
  const auth = useContext(AuthContext);

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [comments, setComments] = useState([]);

  const [commentId, setCommentId] = useState(false);

  const [dropdownActive, setDropdownActive] = useState(false);

  const inputEl = useRef(null);
  const textAreaEl = useRef(null);

  useEffect(() => {
    fetch(`http://localhost:3000/articles/${postId}/comments`, {
      headers: { 'Authorization': 'Bearer ' + localStorage.getItem('jwt') }
    })
    .then(res => {
      if (!res.ok) {
        throw res;
      }
      return res.json()
    })
    .then(data => setComments(data))
    .catch(error => setError(error))
    .finally(() => setIsLoaded(true))
  }, [])

  console.log(comments)

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    fetch(`http://localhost:3000/articles/${postId}/comments`, {
      method: 'POST',
      headers: { 'Authorization': 'Bearer ' + localStorage.getItem('jwt') },
      body: new URLSearchParams(formData)
    })
    .then(res => {
      if (!res.ok) {
        throw res;
      }
      return res.json();
    })
    .then(newComment => {
      // 댓글을 추가하고 textarea를 다시 비운다
      textAreaEl.current.value = "";
      textAreaEl.current.rows = 1;
      setComments([...comments, newComment]);
    })
    .catch(error => alert(error))
  }

  function deleteComment(commentId) {

    let res = window.confirm("삭제하시겠습니까?");

    if (!res) {
      setDropdownActive(false);
      return; 
    }

    fetch(`http://localhost:3000/articles/${postId}/comments/${commentId}`, {
      method: 'DELETE',
      headers: { 'Authorization': 'Bearer ' + localStorage.getItem('jwt') }
    })
    .then(res => {
      if (!res.ok) {
        throw res;
      }
      return res.json()
    })
    .then(() => {
      const updatedComments = comments.filter(comment => comment._id !== commentId)
      setComments(updatedComments);
      setDropdownActive(false);
    })
    .catch(error => alert(error))
  }

  function showDropdown(commentId) {
    console.log(commentId)
    setDropdownActive(true)
    setCommentId(commentId);
  }

  function handleTextArea() {
    // line break (줄바꿈)
    let lb = textAreaEl.current.value.match(/\n/g);
    // /n의 갯수 + 1 만큼 textarea의 rows를 추가한다
    textAreaEl.current.rows = lb ? (lb.length + 1): 1;

  }
  
  const dropdownContent = (
    <button className="btn-link" onClick={() => deleteComment(commentId)}>삭제</button>
  )

  if (error) {
    return <h1>Error!</h1>
  }
  if (!isLoaded) {
    return <h1>Loading...</h1>
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <textarea name="content" rows="1" className="w-100" ref={textAreaEl} onChange={handleTextArea} />
        </div>
        <div className="form-group">
          <button type="submit" className="btn">댓글작성</button>
        </div>
      </form>
      
      <ul>
        {comments.map((comment, index) => (
          <li key={index} className="my-3">
            <div className="flex justify-content-between">
              {/* avatar image and username */}
              <div className="flex">
                <div className="avatar">
                  <img src={`http://localhost:3000/user/${comment.user.image}`} />
                </div>
                <div className="flex align-center ms-1">
                  <Link to={`/profiles/${comment.user.username}`}>{comment.user.username}</Link>
                </div>
              </div>
              {/* 더보기 버튼 */}
              <div className="flex align-center">
                {comment.user._id === auth.user._id &&
                  <button className="btn-link" onClick={() => showDropdown(comment._id)}>
                    <FontAwesomeIcon icon={faEllipsisVertical} />
                  </button>
                }
              </div>
            </div>
            {/* 댓글 내용 */}
            <p className="pre-line">{comment.content}</p>
            <small className="text-secondary">{comment.created}</small>
          </li>
        ))}
      </ul>
      {/* Dropdown */}
      <Dropdown active={dropdownActive} setActive={setDropdownActive} content={dropdownContent} />
    </>
  )
}

function Profile() {
  console.log('Profile Loaded!');

  const auth = useContext(AuthContext);
  const params = useParams();
  const username = params.username;
  const isMaster = auth.user.username === username ? true : false;

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const [profile, setProfile] = useState(null);
  const [isFollowing, setIsFollowing] = useState(null);
  const [followerList, setFollowerList] = useState(null);
  const [followingList, setFollowingList] = useState(null);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setIsLoaded(false);

    Promise.all([
      fetch(`http://localhost:3000/profiles/${username}`),
      fetch(`http://localhost:3000/profiles/${username}/isFollowing`, {
        headers: { 'Authorization': 'Bearer ' + localStorage.getItem('jwt') }
      }),
      fetch(`http://localhost:3000/profiles/${username}/followerList`, {
        headers: { 'Authorization': 'Bearer ' + localStorage.getItem('jwt') }
      }),
      fetch(`http://localhost:3000/profiles/${username}/followingList`, {
        headers: { 'Authorization': 'Bearer ' + localStorage.getItem('jwt') }
      }),
      fetch(`http://localhost:3000/articles?username=${username}`)
    ])
    .then(responses => { 
      // status 200만 받는다 (ok: true)
      responses.map(response => {
        if (!response.ok) { 
          throw response;
        }
      })

      return Promise.all(responses.map(response => response.json()))
    })
    .then(data => {
      console.log(data)

      setProfile(data[0]);
      setIsFollowing(data[1]);
      setFollowerList(data[2])
      setFollowingList(data[3])
      setArticles(data[4]);
    })
    .catch(error => setError(error))
    .finally(() => setIsLoaded(true))
  }, [username])

  function handleFollow(e) {
    e.preventDefault();

    if (!isFollowing) { // 새롭게 팔로우를 시작함
      fetch(`http://localhost:3000/profiles/${username}/follow`, {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${localStorage.getItem('jwt')}` }
      })
      .then(res => {
        if (!res.ok) {
          throw res;
        }
        // return res.json() 가 생략됬다 
        setIsFollowing(true);
      })
      .catch(error => setError(error))
    } else { // 팔로우를 취소함
      fetch(`http://localhost:3000/profiles/${username}/follow`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${localStorage.getItem('jwt')}` }
      })
      .then(res => {
        if (!res.ok) {
          throw res;
        }
        setIsFollowing(false);
      })
      .catch(error => setError(error))
    }
  }

  function logOut() {
    let res = window.confirm("로그아웃 하시겠습니까?");
    
    if (!res) {
      return;
    }

    auth.logOut();
  }

  if (error) {
    return <h1>Error!</h1>
  }
  if (!isLoaded) {
    return <Loading />
  }
  return (
    <>
      {/* 프로필 사진 */}
      <div className="flex mt-3 justify-content-center">
        <div className="profile-image rounded-circle">
          <img src={`http://localhost:3000/user/${profile.image || 'avatar.jpeg'}`} />
        </div>
      </div>

      {/* bio */}
      <div>
        <h3>{profile.username}</h3>
        <p className="pre-line">{profile.bio}</p>
        {isMaster && 
          <>
            <p>
              <Link to={`/profiles/${username}/edit`} className="text-small text-secondary">프로필 수정</Link>
            </p>
            <button className="btn-link text-small text-danger" onClick={logOut}>
              <FontAwesomeIcon icon={faArrowRightFromBracket} />
            </button>
          </>
        }
      </div>

      {/* 팔로우 버튼 */}
      {!isMaster &&
        <form onSubmit={handleFollow}>
          {isFollowing ? 
            <button className="btn w-100 btn-primary">팔로잉</button>
            :
            <button className="btn w-100">팔로우</button>
          }
        </form>
      }

      {/* 팔로워 및 팔로잉, 게시물 갯수 */}
      <div className="flex flex-equal text-center py-3 my-3 border-top border-bottom">
        <div><Link to={`/profiles/${username}/follower`}>팔로워 {followerList.length}</Link></div>
        <div><Link to={`/profiles/${username}/following`}>팔로잉 {followingList.length}</Link></div>
        <div>게시물 {articles.length}</div>
      </div>

      {/* 게시물 */}
      <div className="grid">
        {articles.map((article, index) => (
          <div key={index} className="item">
            <Link to={`/p/${article._id}`}>
              <img src={`http://localhost:3000/posts/${article.photos[0]}`} />
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}

function ProfileEdit() {
  console.log('ProfileEdit Loaded!');

  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [profile, setProfile] = useState({});

  const textAreaEl = useRef(null);
  
  useEffect(() => {
    fetch(`http://localhost:3000/profiles/${auth.user.username}`)
    .then(res => {
      if (!res.ok) {
        throw res;
      }
      return res.json();
    })
    .then(data => setProfile(data))
    .catch(error => setError(error))
    .finally(() => setIsLoaded(true))
  }, [])

  function handleSubmit(e) {
    e.preventDefault();

    fetch(`http://localhost:3000/profiles/edit`, {
      method: 'POST',
      headers: { 'Authorization': 'Bearer ' + localStorage.getItem('jwt') },
      body: new FormData(e.target)
    })
    .then(res => {
      if (!res.ok) {
        throw res;
      }
      return res.json()
    })
    .then(data => {
      navigate(`/profiles/${auth.user.username}`)
    })
    .catch(error => {
      alert(error)
    })
  }

  function handleTextArea() {
    let lb = textAreaEl.current.value.match(/\n/g);
    textAreaEl.current.rows = lb ? (lb.length + 1) : 1
  }

  useEffect(() => {
    if (isLoaded) {
      handleTextArea()
    }
  })

  if (error) {
    return <h1>Error!</h1>
  }
  if (!isLoaded) {
    return <h1>Loading...</h1>
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <h3>Username</h3>
          <p>{profile.username}</p>
        </div>
        <div className="form-group">
          <h3>Image</h3>
          <input type="file" name="image" />
          {profile.image && 
            <p>1 Image uploaded</p>
          }
        </div>
        <div className="form-group">
          <h3>Bio</h3>
          <textarea className="w-100" rows="1" name="bio" defaultValue={profile.bio} 
            ref={textAreaEl} onChange={handleTextArea} 
          />
        </div>
        <div className="form-group">
          <h3>Submit</h3>
          <button type="submit" className="btn">Submit</button>
        </div>
      </form>
    </>
  )
}

function FollowingList() {
  console.log('FollowngList Loaded!');

  const params = useParams();

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [followingList, setFollowingList] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/profiles/${params.username}/followingList`, {
      headers: { 'Authorization': 'Bearer ' + localStorage.getItem('jwt') }
    })
    .then(res => {
      if (!res.ok) {
        throw res;
      }
      return res.json()
    })
    .then(data => setFollowingList(data))
    .catch(error => setError(error))
    .finally(() => setIsLoaded(true))
  }, [])

  console.log(followingList)

  if (error) {
    return <h1>Error!</h1>
  }
  if (!isLoaded) {
    return <h1>Loading...</h1>
  }
  return (
    <>
      <h1>Following List</h1>
      <ul>
        {followingList.map((following, index) => (
          <li key={index}>
            <Link to={`/profiles/${following.followingId.username}`}>{following.followingId.username}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

function FollowerList() {
  console.log('FollowerList Loaded!');

  const params = useParams();

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [followerList, setFollowerList] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/profiles/${params.username}/followerList`, {
      headers: { 'Authorization': 'Bearer ' + localStorage.getItem('jwt') }
    })
    .then(res => {
      if (!res.ok) {
        throw res;
      }
      return res.json()
    })
    .then(data => setFollowerList(data))
    .catch(error => setError(error))
    .finally(() => setIsLoaded(true))
  }, [])

  console.log(followerList)

  if (error) {
    return <h1>Error!</h1>
  }
  if (!isLoaded) {
    return <h1>Loading...</h1>
  }
  return (
    <>
      <h1>Following List</h1>
      <ul>
        {followerList.map((follower, index) => (
          <li key={index}>
            <Link to={`/profiles/${follower.followerId.username}`}>{follower.followerId.username}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

function Explore() {
  console.log('Explore Loaded!');

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [articles, setArticles] = useState([]);
  const [skip, setSkip] = useState(0);

  useEffect(() => {
    fetch(`http://localhost:3000/articles?skip=${skip}`)
    .then(res => {
      if (!res.ok) {
        throw res;
      }
      return res.json()
    })
    .then(data => {
      setArticles([...articles, ...data]);
    })
    .catch(error => setError(error))
    .finally(() => setIsLoaded(true))
  }, [skip])

  console.log(articles)

  if (error) {
    return <h1>Error!</h1>
  }
  return (
    <>
      <div className="my-3">
        <Link to="/search" className="fs-3">
          <FontAwesomeIcon icon={faMagnifyingGlass} /> 검색
        </Link>
      </div>

      <div className="grid">
        {articles.map((article, index) => 
          <div key={index} className="item">
            <Link to={`/p/${article._id}`}>
              <img src={`http://localhost:3000/posts/${article.photos[0]}`} />
            </Link>
          </div>
        )}
      </div>

      {!isLoaded ? 
        <LoadingInline />
        :
        <div className="my-3">
          <button className="btn w-100" onClick={() => setSkip(skip + 9)}>더보기</button>
        </div>
      }
      
    </>
  )
}

function Search() {
  console.log('Search Loaded!');

  const [word, setWord] = useState("");
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // setIsLoaded(false)

    // word (검색어)가 업데이트 될 때마다 서버에 요청을 보낸다.
    fetch(`http://localhost:3000/users?username=${word}`, {
      headers: { 'Authorization': 'Bearer ' + localStorage.getItem('jwt') }
    })
    .then(res => {
      if (!res.ok) {
        throw res;
      }
      return res.json();
    })
    .then(data => setUsers(data))
    .catch(error => setError(error))
    .finally(() => setIsLoaded(true))
  }, [word])

  function handleChange(e) {
    setWord(e.currentTarget.value)
  }
  
  console.log(word)

  if (error) {
    return <h1>Error!</h1>
  }
  if (!isLoaded) {
    return <h1>Loading...</h1>
  }
  return (
    <>
    <div>
      <form className="mt-3">
        <input type="text" className="w-100" onChange={handleChange} value={word} />
      </form>

      <ul>
        {users.map((user, index) => (
          <li key={index} className="flex my-3">
            <div className="avatar">
              <img src={`http://localhost:3000/user/${user.image}`} />
            </div>
            <div className="flex align-cener ms-1">
              <Link to={`/profiles/${user.username}`}>{user.username}</Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </>
  )

}

function UpdateArticle() {
  console.log('UpdateArticle Loaded!');

  const navigate = useNavigate();
  const params = useParams();
  const postId = params.postId;

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [article, setArticle] = useState(null);

  const textAreaEl = useRef(null);

  useEffect(() => {
    fetch(`http://localhost:3000/articles/${postId}`)
    .then(res => {
      if (!res.ok) {
        throw res;
      }
      return res.json()
    })
    .then(data => setArticle(data))
    .catch(error => setError(error))
    .finally(() => setIsLoaded(true))
  }, [])

  function handleSubmit(e) {
    e.preventDefault()

    fetch(`http://localhost:3000/articles/${postId}`, {
      method: 'PUT',
      headers: { 'Authorization': 'Bearer ' + localStorage.getItem('jwt') },
      body: new FormData(e.target)
    })
    .then(res => {
      if (!res.ok) {
        throw res;
      }
      return res.json()
    })
    .then(() => navigate(`/p/${postId}`))
    .catch(error => alert(error))
  }

  function handleTextArea() {
    let lb = textAreaEl.current.value.match(/\n/g);
    textAreaEl.current.rows = lb ? (lb.length + 1) : 1;
  }

  useEffect(() => {
    // 처음 로드되었을 때 textarea rows를 조절한다
    if (isLoaded) {
      handleTextArea()
    }
  })

  if (error) {
    return <h1>Error!</h1>
  }
  if (!isLoaded) {
    return <h1>Loading...</h1>
  }
  return (
    <>
      <h1>Update Article</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <h3>Description</h3>
          <textarea name="description" rows="1" className="w-100" ref={textAreaEl}
          defaultValue={article.description} onChange={handleTextArea} />
        </div>
        <div className="form-group">
          <h3>Photos</h3>
          <p>{article.photos.length} photos</p>
        </div>
        <div className="form-group">
          <h3>Submit</h3>
          <button type="submit" className="btn">Submit</button>
        </div>
      </form>
    </>
  )
}

function CreateArticle() {
  console.log('CreateArticle Loaded!');

  const navigate = useNavigate();
  const textAreaEl = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();

    fetch('http://localhost:3000/articles', {
      method: 'POST',
      headers: { 'Authorization': 'Bearer ' + localStorage.getItem('jwt') },
      body: new FormData(e.target)
    })
    .then(res => {
      if (!res.ok) {
        throw res;
      }
      return res.json();
    })
    .then(() => {
      navigate('/')
    })
    .catch(error => alert('Error!'));
  }

  function handleTextArea() {
    // line break (줄바꿈)
    let lb = textAreaEl.current.value.match(/\n/g);

    textAreaEl.current.rows = lb ? (lb.length + 1) : 1;
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <h3>Description</h3>
          <textarea name="description" rows="1" className="w-100" ref={textAreaEl} onChange={handleTextArea} />
        </div>
        <div className="form-group">
          <h3>Photos</h3>
          <input type="file" name="photos" multiple={true} />
        </div>
        <div className="form-group">
          <h3>Submit</h3>
          <button type="submit" className="btn">Submit</button>
        </div>
      </form>
    </>
  )
}

function SignUp() {
  console.log('SignUp Loaded!');

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [newUser, setNewUser] = useState({});

  const [validation, setValidation] = useState(null);

  useEffect(() => {
    console.log('new User..', newUser);
    fetch('http://localhost:3000/validate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUser) // JSON.stringify(object) object를 json 포맷으로 변환
    })
    .then(res => {
      if (!res.ok) {
        throw res; // 커스텀 에러. status가 200이 아닐 경우
      }
      return res.json(); // res객체의 body를 parsing한다. 
    })
    .then(data => setValidation(data))
    .catch(error => setError(error))
    .finally(() => setIsLoaded(true))
  }, [newUser]) // [dependency]: 처음에 실행된다. dependency가 변할 때마다 실행된다

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    // newUser에 새로운 속성을 추가한다
    setNewUser({ ...newUser, [name]: value })
  }

  function handleSubmit(e) {
    e.preventDefault();

    for (let key of Object.keys(validation)) {
      // 4 항목중에 하나라도 pass: false면 form이 제출되지 않도록 한다.
      if (validation[key].pass === false) {
        return alert("가입 정보가 올바르지 않습니다.")
      }
    }

    // 유효성 검사 통과 후 가입 절차를 진행한다.
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUser)
    })
    .then(res => {
      if (!res.ok) {
        throw res;
      }
      console.log('가입 성공!')
    })
    .catch(error => {
      console.error(error);
      alert('에러가 발생했습니다. 잠시 후 다시 시도해주세요')
    });
  }

  console.log(newUser)
  console.log(validation)

  if (error) {
    return <h1>Error!</h1>
  } 
  if (!isLoaded) {
    return <h1>Loading...</h1>
  }
  return (
    <>
      <h1>회원가입</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <h3>사용자 이름</h3>
          <input type="text" name="username" className="w-100" autoComplete="off" onChange={handleChange} />
          {validation.username.pass ? 
            <p className="text-success">{validation.username.message}</p>
            :
            <p className="text-danger">{validation.username.message}</p>
          }
        </div>
        <div className="form-group">
          <h3>이메일</h3>
          <input type="text" name="email" className="w-100" autoComplete="off" onChange={handleChange} />
          {validation.email.pass ? 
            <p className="text-success">{validation.email.message}</p>
            :
            <p className="text-danger">{validation.email.message}</p>
          }
        </div>
        <div className="form-group">
          <h3>비밀번호</h3>
          <input type="text" name="password" className="w-100" autoComplete="off" onChange={handleChange} />
          {validation.password.pass ? 
            <p className="text-success">{validation.password.message}</p>
            :
            <p className="text-danger">{validation.password.message}</p>
          }
        </div>
        <div className="form-group">
          <h3>비밀번호 확인</h3>
          <input type="text" name="password_confirm" className="w-100" autoComplete="off" onChange={handleChange} />
          {validation.passwordConfirm.pass ? 
            <p className="text-success">{validation.passwordConfirm.message}</p>
            :
            <p className="text-danger">{validation.passwordConfirm.message}</p>
          }
        </div>
        <div className="form-group">
          <h3>제출</h3>
          <button type="submit" className="btn">Submit</button>
        </div>
      </form>
    </>
  )
}
function Login() {
  console.log('Login Loaded!');

  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  const [message, setMessage] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    fetch('http://localhost:3000/user/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: formData.get('email'),
        password: formData.get('password')
      })
    })
    .then(res => {
      if (!res.ok) {
        throw res;
      }
      return res.json()
    })
    .then(data => {
      console.log(data)
      // 로그인에 실패한 경우 (token이 없을 경우)
      if (!data.token) {
        return setMessage(data.message);
      }
      // 로그인에 성공한 경우, 브라우저에 jwt을 저장한다
      localStorage.setItem('jwt', data.token);
      // 로그인에 성공한 경우 Home으로 이동한다
      auth.signIn(data.user, () => navigate('/'), { replace: true }) // auth.signIn(callback)
    })
    .catch(error => alert('Error!'));
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="form-group">
          <input type="text" className="w-100" name="email" defaultValue="bunny@example.com" autoComplete="off" />
        </div>
        <div className="form-group">
          <input type="text" className="w-100" name="password" defaultValue="12345678" autoComplete="off" />
        </div>
        <div className="form-group">
          <button className="btn">Login</button>
        </div>
      </form>
      <p className="text-danger">{message}</p>
      <p><Link to="/account/signup" className="text-primary">Create account</Link></p>
    </>
  )
}

function Dropdown({ active, setActive, content }) {
  console.log('Dropdown Loaded!');

  const dropdownEl = useRef(null);
  const modalEl = useRef(null);

  useEffect(() => {
    if (active) {
      // scrollHeight값(readonly)은 변하지 않는다.
      dropdownEl.current.style.height = dropdownEl.current.scrollHeight + "px";
      modalEl.current.classList.add("active");
    } else {
      dropdownEl.current.style.height = 0
      modalEl.current.classList.remove("active");
    }
  })

  return (
    <>
      <div className="modal" ref={modalEl} onClick={() => setActive(false)}></div>
      <div className="dropdown" ref={dropdownEl}>
        <div className="p-3">{content}</div>
      </div>
    </>
  )
}

function Loading() {
  return <div className="spinner"></div>
}

function LoadingInline() {
  return <div className="spinner-inline"></div>
}

function NotFound() {
  return (
    <>
      <h1>404 Not Found</h1>
    </>
  )
}
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

