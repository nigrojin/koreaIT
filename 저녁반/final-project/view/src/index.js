import React, { useState, useEffect, useRef, useContext, createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Outlet, Link, 
  useParams, Navigate, useNaviagate, useLocation } from "react-router-dom";
import './index.css';

function App() {
  console.log('App Loaded!');

  return (
    <Router>
      <Routes>
        {/* 로그인 필요 */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="explore" element={<Explore />} />
        </Route>
        {/* 로그인 필요하지 않음 */}
        <Route path="account/signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

function Layout() {
  console.log('Layout Loaded!');

  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/explore">Explore</Link></li>
        </ul>
      </nav>

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
function Explore() {
  return (
    <>
      <h1>Explore</h1>
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
          <input type="text" name="username" autoComplete="off" onChange={handleChange} />
          <div>{validation.username.message}</div>
        </div>
        <div className="form-group">
          <input type="text" name="email" autoComplete="off" onChange={handleChange} />
          <div>{validation.email.message}</div>
        </div>
        <div className="form-group">
          <input type="text" name="password" autoComplete="off" onChange={handleChange} />
          <div>{validation.password.message}</div>
        </div>
        <div className="form-group">
          <input type="text" name="password_confirm" autoComplete="off" onChange={handleChange} />
          <div>{validation.passwordConfirm.message}</div>
        </div>
        <div className="form-group">
          <button type="submit" className="btn">Submit</button>
        </div>
      </form>
    </>
  )
}
function Login() {
  console.log('Login Loaded!');

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
        return setMessage(data.message)
      }
      // 로그인에 성공한 경우, 브라우저에 jwt을 저장한다
      localStorage.setItem('jwt', data.token);
    })
    .catch(error => alert('Error!'))
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="form-group">
          <input type="text" className="" name="email" autoComplete="off" />
        </div>
        <div className="form-group">
          <input type="text" className="" name="password" autoComplete="off" />
        </div>
        <div className="form-group">
          <button className="">Login</button>
        </div>
      </form>
      <p>{message}</p>
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

