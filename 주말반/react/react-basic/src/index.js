import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// JSX 문법
// JavaScript Object를 HTML tag를 쓰는 것 같이 만들 수 있다
// Babel을 통해 일반 javaScript Obejct로 변환된다

// const element = (
//   <div>
//     <h1>현대자동차</h1>
//     <ul>
//       <li>제네시스</li>
//       <li>스타리아</li>
//       <li>아이오닉</li>
//       <li>캐스퍼</li>
//     </ul>
//   </div>
// )

// JSX를 사용하지 않는 경우
// const element = React.createElement('h1', {className: 'title'}, 'Hello, REACT!');

// html 문서로 element를 append한다

// 리액트의 컴포넌트
// 함수 컴포넌트
// View를 설계하기 위한 부품들이다

// function App() {
//   console.log("App Loaded!");

//   return (
//     <>
//       <h1>App</h1>
//       {/* self-closing 엘리먼트에서는 /(slash)를 추가해야한다 */}
//       <hr />
//       {/* App컴포넌트에서 List컴포넌를 호출 */}
//       <List />
//     </>
//   )
// }

// function List() {
//   console.log("List Loaded!");

//   // JSX에서는 열림태그와 닫힘태그가 엘리먼트를 감싸야(wrap) 한다
//   // <></>: React Fragment: html에 전달되지 않는 열림태그와 닫힘태그를 만들 수 있다
//   return (
//     <>
//       <h1>현대자동차</h1>
//       <ul>
//         <li>제네시스</li>
//         <li>스타리아</li>
//         <li>아이오닉</li>
//         <li>캐스퍼</li>
//       </ul>
//     </>
//   )
// }

const cars = ["제네시스", "스타리아", "아이오닉", "캐스퍼"]

function App(props) {

  const cars = props.cars;

  // props.cars.map(car => {
  //   console.log(car)
  // })

  const list = cars.map(car => {
    return <li>{car}</li>
  })

  return (
    <>
      <h1>현대자동차</h1>
      <ul>
        {list}
      </ul>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
// App 함수 컴포넌트를 호출한다
root.render(<App cars={cars} />);
