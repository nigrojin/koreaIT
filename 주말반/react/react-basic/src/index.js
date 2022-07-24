import React, { useState, useEffect, useRef, useContext } from 'react';
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

// const cars = ["제네시스", "스타리아", "아이오닉", "캐스퍼"]

// // props(properties): 함수컴포넌트에 통과되는 인자(parameter)
// function App(props) {

//   const cars = props.cars;

//   // props.cars.map(car => {
//   //   console.log(car)
//   // })

//   const list = cars.map((car, index) => {
//     return <li key={index}>{car}</li>
//   })

//   return (
//     <>
//       <h1>현대자동차</h1>
//       <ul>
//         {/* JSX value로 구성된 Array를 출력한다 */}
//         {list}
//       </ul>
//     </>
//   )
// }

// function App(props) {

//   console.log(props)

//   return (
//     <>
//       {/* 문자열 (String) 안에서 JavaScript 변수를 출력한다 {}  */}
//       <p>foo: {props.foo}, bar: {props.bar}</p>
//     </>
//   )
// }

// const DATA = [
//   { name: "Cat", color: "Mixed", },
//   { name: "Bunny", color: "Beige" },
//   { name: "Duck", color: "White" }
// ]

// function App(props) {

//   const animals = props.animals;

//   console.log(animals);

//   return (
//     <>
//       <h1>Animals</h1>
//       <ul>
//         {animals.map((animal, index) => (
//           <li key={index}>{animal.name}, {animal.color}</li>
//         ))}
//       </ul>
//     </>
//   )
// }

// Q. 과일 리스트를 출력해보세요
// const DATA = [
//   { name: "Apple", color: "Red" },
//   { name: "Banana", color: "Yellow" },
//   { name: "Watermelon", color: "Mixed" }
// ]

// function App({ fruits }) {

//   const list = fruits.map((fruit, index) => (
//     <li key={index}>{fruit.name}, {fruit.color}</li>
//   ))

//   console.log(list);

//   return (
//     <div>
//       <h1>Fruits</h1>
//       <ul>
//         {list}
//       </ul>
//     </div>
//   )
// }

// const DATA = [
//   { model: "제네시스", color: ["Black", "Navy"], cost: 100  },
//   { model: "스타리아", color: ["Black", "Silver"], cost: 80 },
//   { model: "아이오닉", color: ["White", "Blue"], cost: 70  },
//   { model: "캐스퍼", color: ["Khaki", "Red"], cost: 50  },
// ]

// function App({ cars }) {
//   const list = cars.map((car, index) => {
//     // map 메소드에서 Car 컴포넌트를 return한다
//     return <Car key={index} car={car} />
//   })

//   return (
//     <>
//       <h1>현대자동차</h1>
//       {list}
//     </>
//   )
// }

// function Car({ car }) {
//   return (
//     <div>
//       <h3>{car.model}</h3>
//       <p>컬러: {car.color.length종류}</p>
//       <p>가격: {car.cost}원</p>
//     </div>
//   )
// }

// # Error Handling in React
// function App() {
//   // 1. Compile하는 도중 발생하는 Error
//   // Compile: 코드를 읽어서 기계어로 변환한다
//   // 문법적으로 잘못된 경우
//   // view안에서 확인 가능

//   // 2. 기타 Error
//   // Error handler를 설정해야 한다
//   // 예)
//   // Objects are not valid as a React child
//   // JSX에서 object를 출력할 때 발생하는 Error
//   // car를 JSX에서 출력할 경우 등.

//   const car = { model: "제네시스" }

//   return (
//     <>
//       <h1>{car.model}</h1>
//     </>
//   )
// }

// # Component에서 조건(condition) 사용
// function App() {

//   const number = 0

//   // 삼항연산자(Ternary)를 사용하여 조건 실행
//   return <p>{number > 0 ? "number는 0보다 크다" : "number는 0보다 작거나 같다"}</p>
// }

// function App() {
//   const bool = false;

//   return <p>{bool && "조건은 참이다"}</p>
// }

// function App() {

//   // 앞의 조건이 거짓인 경우, 뒤에만 실행
//   // const bool = undefined;
//   // return <p>{bool || "조건은 정의되지 않았다"}</p>

//   // 앞의 조건이 참인 경우, 앞에만 실행
//   // const text = "Text"
//   // return <p>{text || "다른 조건이 false인 경우 출력된다"}</p>

//   // 둘다 조건이 거짓인 경우, 둘다 실행하지 않음
//   // const bool = false;
//   // // 둘다 false 일 경우
//   // return <p>{bool || ""}</p>

//   // 둘다 참인 경우
//   // 앞에만 실행
//   // return <p>{"나는 참이다" || "나도 참이다"}</p>
// }

// # State
// 컴포넌트 안에서 관리되는 변수
// 컴포넌트 안에서만 접근할 수 있다. 
// 함수범위 (지역범위)
// function App() {
//   // count: state
//   const [count, setCount] = useState(0);

//   return <h1>{count}</h1>
// }

// # React Hook
// 리액트에서 제공하는 특별한 메서드(함수)
// Hook은 여러가지 규칙이 존재한다
// 기본 Hook: useState, useEffect, useRef, useContext
// 추가 Hook: useReducer, useMemo, useCallback, ...

// # useState Hook
// 상태 유지값(state)과 그 값을 갱신하는 함수를 반환한다

// function App() {
//   console.log("App Loaded!");

//   // [state, state를 갱신하는 함수] = useState(state의 초기값)
//   // state가 업데이트되면 컴포넌트는 다시 호출된다
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <h1>{count}</h1>
//       <button onClick={() => setCount(count + 1)}>+</button>
//     </>
//   )
// }

// function App() {
//   // console.log("App Loaded!");
//   const [fruit, setFruit] = useState("Apple");

//   return (
//     <>
//       <h1>{fruit}</h1>
//       <button onClick={() => setFruit("Tomato")}>Click</button>
//     </>
//   )
// }

// function App() {

//   const [clock, setClock] = useState(new Date().toLocaleTimeString())

//   // 컴포넌트가 호출될 때마다 setTimeout를 호출한다
//   setTimeout(() => {
//     setClock(new Date().toLocaleTimeString());
//   }, 1000)

//   return <h1>{clock}</h1>
// }

// function App() {
//   // 두개의 state를 사용하는 경우
//   const [car1, setCar1] = useState("제네시스 블랙");
//   const [car2, setCar2] = useState("스타리아 블랙");

//   return (
//     <>
//       <h1>현대자동차</h1>
//       <ul>
//         <li>{car1}</li>
//         <li>{car2}</li>
//       </ul>
//       <button onClick={() => setCar1("제네시스 화이트")}>업데이트 제네시스</button>
//       <button onClick={() => setCar2("스타리아 실버")}>업데이트 스타리아</button>
//     </>
//   )
// }

// function App() {

//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <h1>{count}</h1>
//       <button onClick={() => setCount(count - 1) }>-</button>
//       <button onClick={() => setCount(count + 1) }>+</button>
//     </>
//   )
// }

function App() {
  const [isFavorite, setIsFavorite] = useState(false);

  function handleFavorite() {
    setIsFavorite(!isFavorite)
  }

  return (
    <>
      <h1>좋아요</h1>
      <button onClick={handleFavorite}>{isFavorite ? "좋아요 취소" : "좋아요"}</button>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

// App 함수 컴포넌트를 호출한다
// <컴포넌트이름 key=value key=value ...  / >
root.render(<App />);


