import React, { useState, useEffect, useRef, useContext, createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Outlet, Link, 
  useParams, Navigate, useNavigate, useLocation } from "react-router-dom";
import './index.css';

function App() {
  console.log('App Loaded!');

  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* 로그인 필요 */}
          <Route path="/" element={<AuthRequired><Layout /></AuthRequired>}>
            <Route index element={<Home />} />
            <Route path="create" element={<CreateArticle />} />
            <Route path="explore" element={<Explore />} />
            <Route path="/p/:postId">
              <Route index element={<PostView />} />
              <Route path="update" element={<UpdateArticle />} />
              <Route path="comments" element={<Comments />} />
            </Route>
            <Route path="/profiles/:username">
              <Route index element={<Profile />} />
            </Route>
          </Route>
          {/* 로그인 필요하지 않음 */}
          <Route path="account/signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
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

  return (
    <>
      <nav>
        <Link to="/">Home</Link> {" "}
        <Link to="/explore">Explore</Link> {" "}
        <Link to="/create">Create</Link> {" "}
        <Link to={`/profiles/${auth.user.username}`}>Profile</Link> {" "}
        <button onClick={auth.logOut}>Log out</button>
      </nav>

      <small>{location.pathname}</small>

      {/* 바뀌는 부분 */}
      <Outlet />
    </>
  )
}

function Home() {
  return (
    <>
      <h1>Home</h1>
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

  // 순회 가능한 객체(Array)에 주어진 모든 프로미스가 이행된 후,
  // 주어진 프로미스중 하나라도 거부되는 경우 error 발생
  useEffect(() => {
    Promise.all([
      fetch(`http://localhost:3000/articles/${postId}`),
      fetch(`http://localhost:3000/articles/${postId}/favorite`, {
        headers: { 'Authorization': 'Bearer ' + localStorage.getItem('jwt') }
      })
    ])
    .then(responses => 
      Promise.all(responses.map(response => response.json()))
    )
    .then(data => {
      setArticle(data[0])
      setIsFavorite(data[1])
    })
    .catch(error => setError(error))
    .finally(() => setIsLoaded(true))
  }, [])

  console.log(article)
  console.log(isFavorite)

  if (error) {
    return <h1>Error!</h1>
  } 
  if (!isLoaded) {
    return <h1>Loading...</h1>
  }
  return (
    <PostItem article={article} isFavorite={isFavorite} />
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

  function deleteArticle() {
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

  return (
    <>
      <h3>
        <Link to="">{article.author.username}</Link>
      </h3>
      <div>
        {article.photos.map((photo, index) => (
          <div key={index}>
            <img src={`http://localhost:3000/posts/${photo}`} />
          </div>
        ))}
      </div>
      {isMaster &&
        <div>
          <Link to={`/p/${postId}/update`}>수정</Link> {" "} 
          <button onClick={deleteArticle}>삭제</button>
        </div>
      }
      <button onClick={handleChange}>
        {!isFavorite ? "좋아요" : "좋아요 취소"}
      </button>
      <p>좋아요: {favoriteCount}</p>
      <p>{article.description}</p>
      <p><Link to={`/p/${postId}/comments`}>댓글달기</Link></p>
    </>
  )
}

function Comments() {
  console.log('Comments Loaded!');

  const params = useParams();
  const postId = params.postId;

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [comments, setComments] = useState([]);

  const inputEl = useRef(null);

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
      // comments.push(newComment)
      inputEl.current.value = "";
      setComments([...comments, newComment]);
    })
    .catch(error => alert(error))
  }

  function deleteComment(commentId) {
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
      setComments(updatedComments)
    })
    .catch(error => alert(error))
  }

  if (error) {
    return <h1>Error!</h1>
  }
  if (!isLoaded) {
    return <h1>Loading...</h1>
  }
  return (
    <>
      <h3>댓글</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="text" name="content" autoComplete="off" ref={inputEl} />
        </div>
        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>
              {comment.content} {" "}
              <span onClick={() => deleteComment(comment._id)}>&times;</span>
          </li>
        ))}
      </ul>
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
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    Promise.all([
      fetch(`http://localhost:3000/profiles/${username}`),
      fetch(`http://localhost:3000/profiles/${username}/isFollowing`, {
        headers: { 'Authorization': 'Bearer ' + localStorage.getItem('jwt') }
      }),
      fetch(`http://localhost:3000/articles?username=${username}`)
    ])
    .then(responses => {
      return Promise.all(responses.map(response => response.json()))
    })
    .then(data => {
      setProfile(data[0]);
      setIsFollowing(data[1]);
      setArticles(data[2]);
    })
    .catch(error => setError(error))
    .finally(() => setIsLoaded(true))
  }, [username])

  if (error) {
    return <h1>Error!</h1>
  }
  if (!isLoaded) {
    return <h1>Loading...</h1>
  }
  return (
    <>
      <h1>Profile</h1>
    </>
  )
}

function Explore() {
  console.log('Explore Loaded!');

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/articles')
    .then(res => {
      if (!res.ok) {
        throw res;
      }
      return res.json()
    })
    .then(data => setArticles(data))
    .catch(error => setError(error))
    .finally(() => setIsLoaded(true))
  }, [])

  console.log(articles)

  if (error) {
    return <h1>Error!</h1>
  }
  if (!isLoaded) {
    return <h1>Loading...</h1>
  }
  return (
    <>
      <h1>Explore</h1>
      <div>
        {articles.map((article, index) => 
          <div key={index} style={{ display: 'inline-block' }}>
            <Link to={`/p/${article._id}`}>
              <img src={`http://localhost:3000/posts/${article.photos[0]}`} />
            </Link>
          </div>
        )}
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
          <input type="text" name="description" defaultValue={article.description} />
        </div>
        <div className="form-group">
          <h3>Photos</h3>
          <p>{article.photos.length} photos</p>
        </div>
        <div className="form-group">
          <h3>Submit</h3>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  )
}

function CreateArticle() {
  console.log('CreateArticle Loaded!');

  const navigate = useNavigate();

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

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <h3>Description</h3>
          <input type="text" className="" name="description" />
        </div>
        <div className="form-group">
          <h3>Photos</h3>
          <input type="file" name="photos" multiple={true} />
        </div>
        <div className="form-group">
          <h3>Submit</h3>
          <button type="submit">Submit</button>
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
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <h3>username</h3>
          <input type="text" name="username" autoComplete="off" onChange={handleChange} />
          <div>{validation.username.message}</div>
        </div>
        <div className="form-group">
          <h3>email</h3>
          <input type="text" name="email" autoComplete="off" onChange={handleChange} />
          <div>{validation.email.message}</div>
        </div>
        <div className="form-group">
          <h3>password</h3>
          <input type="text" name="password" autoComplete="off" onChange={handleChange} />
          <div>{validation.password.message}</div>
        </div>
        <div className="form-group">
          <h3>password confirm</h3>
          <input type="text" name="password_confirm" autoComplete="off" onChange={handleChange} />
          <div>{validation.passwordConfirm.message}</div>
        </div>
        <div className="form-group">
          <h3>Submit</h3>
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
          <input type="text" className="" name="email" defaultValue="bunny@example.com" autoComplete="off" />
        </div>
        <div className="form-group">
          <input type="text" className="" name="password" defaultValue="12345678" autoComplete="off" />
        </div>
        <div className="form-group">
          <button className="">Login</button>
        </div>
      </form>
      <p>{message}</p>
      <p><Link to="/account/signup">Create account</Link></p>
    </>
  )
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

