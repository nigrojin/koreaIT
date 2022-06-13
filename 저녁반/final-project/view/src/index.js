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
    fetch('http://localhost:3000/validate', {
      method: 'POST',
      body: JSON.stringify(newUser)
    })
    .then(res => {
      if (!res.ok) {
        throw res;
      }
      return res.json();
    })
    .then(data => console.log(data))
    .catch(error => setError(error))
    .finally(() => setIsLoaded(true))
  }, [newUser]) // [dependency]: 처음에 실행된다. dependency가 변할 때마다 실행된다

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    // newUser에 새로운 속성을 추가한다
    setNewUser({ ...newUser, [name]: value })
  }

  console.log(newUser)
 
  return (
    <>
      <h1>Sign Up</h1>
      <form>
        <div className="form-group">
          <input type="text" name="username" autoComplete="off" onChange={handleChange} />
          <div></div>
        </div>
        <div className="form-group">
          <input type="text" name="email" autoComplete="off" onChange={handleChange} />
          <div></div>
        </div>
        <div className="form-group">
          <input type="text" name="password" autoComplete="off" onChange={handleChange} />
          <div></div>
        </div>
        <div className="form-group">
          <input type="text" name="password_confirm" autoComplete="off" onChange={handleChange} />
          <div></div>
        </div>
        <div className="form-group">
          <button type="submit" className="btn">Submit</button>
        </div>
      </form>
    </>
  )
}
function Login() {
  return (
    <>
      <h1>Login</h1>
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

