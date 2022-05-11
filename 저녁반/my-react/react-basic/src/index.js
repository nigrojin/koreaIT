import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import ReactDOM from 'react-dom/client';

// Component
// function App() {
//   // JSX: JavaScript에서 HTML과 비슷한 문법을 제공한다.
//   // Virtual DOM
//   // Babel에 의해서 JavaScript 객체로 변환된다.
//   return <h1>Hello World</h1>
// }

// function App() {

//   // JSX는 닫는 태그가 필수이다
//   // 줄바꿈에는 ()를 사용해야 한다.
//   return (
//     <>
//       <h1>hello world</h1>
//       <p>Welcome to React</p>
//     </>
//   )
// }

// Props: Component의 인자
// function App(props) {

//   console.log(props)

//   // return <h1>{props.model} {props.color}</h1>
//   return <h1>{`${props.model} ${props.color}`}</h1>
// }


// Event
// function App() {

//   function handleChange() {
//     alert('hello React')
//   }

//   return (
//     <>
//       <h1>Event</h1>
//       <button onClick={handleChange}>button</button>
//     </>
//   )
// }

// function App() {

//   function handleChange(data) {
//     alert(data)
//   }

//   return (
//     <>
//       <h1>Event</h1>
//       <button onClick={() => handleChange('hello React')}>button</button>
//     </>
//   )
// }

// React 조건 렌더링
// if else


// function Genesis() {
//   return <h1>제네시스</h1>
// }

// function Staria() {
//   return <h1>스타리아</h1>
// }

// function App(props) {

//   console.log(props)

//   if (props.model === '제네시스') {
//     return <Genesis />
//   }

//   if (props.model === '스타리아') {
//     return <Staria />
//   }
// }

// && Operator
// 참 && 실행

// function App(props) {
//   const cars = props.cars

//   console.log(cars)

//   return (
//     <>
//       <h1>현대자동차</h1>
//         { cars.length > 0 && 
//           <p>{cars.length}대의 자동차가 있습니다</p>  
//         }
//     </>
//   )
// }
// const cars = ['제네시스', '스타리아', '아이오닉', '캐스퍼']

// Ternary 삼항연산자
// 조건 ? true일때 : false 일때


// function App(props) {
//   console.log(props)

//   return(
//     <div>
//      { props.model === '제네시스' ? <h1>제네시스</h1> : <h1>알 수 없음</h1> }
//     </div>
//   )
// }


// map()
// function App() {
//   const cars = ['제네시스', '스타리아', '아이오닉', '캐스퍼'];

//   return (
//     <>
//       <h1>현대자동차</h1>
//       <ul>
//         {cars.map((car, index, array) => <li key={index}>{car}</li>)}

//         {/* { cars.map(car => {
//           return <li>{car}</li>
//         }) } */}

//       </ul>
//     </>
//   )
// }


// Form
// function App() {

//   function handleSubmit(e) {
//     // 기본값을 실행하지 않는다.
//     // form을 제출하지 않는다.
//     e.preventDefault();
//     alert('제출되었습니다')
//   }

//   function handleChange(e) {
//     // e.target.value
//     // e.currentTarget.value
//     console.log(e.currentTarget.value)
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       {/* 띄어쓰기 {" "} */}
//       <label> 이메일을 입력하세요 {" "} 
//         <
//           input type="text" 
//           placeholder="email" 
//           onChange={handleChange} 
//           style={{ padding: '10px' }} 
//         />
//       </label>
//       <
//         button 
//         type="submit"
//         style={{ padding: '10px', backgroundColor: 'black', color: '#fff' }}
//       >
//         button
//       </button>
//     </form>
//   )
// }


// React HOOK
// 특별한 메서드
// state에 접근하고 다른 React의 특징들을 사용할 수 있다.
// props and state
// props: Component의 인자
// state: 함수 내에서 선언된 변수처럼 Component 안에서 관리된다
// state: 추적해야하는 값(상태). 변하는 값이다

// useState()
// useEffect()
// useRef()

// function App() {
//   console.log('App Loaded!');

//   // destructing
//   // const [initialValue, state를 바꾸는 함수]
//   // 함수 컴포넌트안에서 state를 추적할 수 있게한다
//   const [data, setData] = useState('제네시스');

//   return (
//     <>
//       <h1>{data}</h1>
//       <button onClick={() => setData('스타리아')}>button</button>
//     </>
//   )
// }

// useEffect()
// 함수 컴포넌트안에서 side effect를 실행한다
// side effect = 데이터 가져오기, DOM 업데이트 등등..
// useEffect(callback(effect), dependency)

// function App() {
//   console.log('App Loaded!');

//   const [count, setCount] = useState(0);

//   // side effect
//   useEffect(() => {
//     document.title = `${count} 클릭했습니다`
//   })

//   return (
//     <div>
//       <p>{count}번 클릭했습니다</p>
//       <button onClick={() => setCount(count + 1)}>button</button>
//     </div>
//   )
// }


// function App() {
//   console.log('App Loaded!')

//   // 비동기
//   useEffect(() => {
//     console.log(1)
//   })

//   // setTimeout(() => {
//   //   console.log(1)
//   // })

//   console.log(2)
// }

// function App() {
//   console.log('App Loaded!');

//   const [count, setCount] = useState(0);

//   console.log(count)

//   useEffect(() => {
//     setTimeout(() => {
//       setCount(count + 1)
//     }, 1000)
//   }, [])

//   // [] : 컴포넌트가 처음 로드되었을때만 실행
// }

// function App() {
//   console.log('App Loaded!');

//   const [data, setData] = useState(0);

//   useEffect(() => {
//     console.log('..')
//   }, [data])
//   // [dependency, ..] 
//   // 처음에 한번 실행된다
//   // dependency가 업데이트 될 때 실행

//   console.log(data)

//   function handleChange() {
//     setData(1)
//   }

//   return (
//     <>
//       <h1>..</h1>
//       <button onClick={handleChange}>button</button>
//     </>
//   )
// }

// useRef()
// 직접적으로 DOM element에 접근가능하다
// 렌더링 사이에 값을 전달한다.

function App() {

  const inputElement = useRef();
  // current Object를 리턴한다.

  console.log(inputElement);


  useEffect(() => {
    console.log(inputElement);
    inputElement.current.focus();
    inputElement.current.style.outline = '5px solid red'
  })

  return (
    <>
      <h1>useRef</h1>
      <input type="text" ref={inputElement} />
    </>
  )
}


// Render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

