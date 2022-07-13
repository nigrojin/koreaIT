import { useState, useEffect, useRef, createContext, useContext } from 'react';
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

// function App() {

//   const inputElement = useRef();
//   // current Object를 리턴한다.

//   console.log(inputElement);

//   useEffect(() => {
//     console.log(inputElement);
//     inputElement.current.focus();
//     inputElement.current.style.outline = '5px solid red';
//   })

//   return (
//     <>
//       <h1>useRef</h1>
//       <input type="text" ref={inputElement} />
//     </>
//   )
// }


// # useState()를 활용해서 시계를 만들어 보세요
// function App() {
//   console.log('App Loaded');

//   // useState(initialValue)
//   const [data, setData] = useState(new Date().toLocaleTimeString());

//   // setTimeout은 App이 렌더링 될때 마다 호출
//   setTimeout(() => {
//     // setData가 App 컴포넌트를 re-rendering
//     // state update
//     setData(new Date().toLocaleTimeString());
//   }, 1000)

//   return (
//     <>
//       <h1>{data}</h1>
//     </>
//   )
// }

// # useState를 활용해서 랜덤숫자를 추가하세요
// function App() {
//   console.log('App Loaded!');

//   const [data, setData] = useState([]);

//   console.log(data)

//   function handleClick() {
//     // console.log(Math.random())

//     // Array.push()와 같다
//     setData([...data, Math.random()]);
//   }

//   return (
//     <>
//       <h1>App</h1>
//       <button onClick={handleClick}>Add</button>
//       <ul>
//         {data.map((value, index) => <li key={index}>{value}</li>)}
//       </ul>
//     </>
//   )
// }


// function App() {
//   console.log('App Loaded!');

//   const [data, setData] = useState([]);

//   console.log(data)

//   setTimeout(() => {
//     setData([...data, Math.random()]);
//   }, 1000)

//   return (
//     <>
//       <h1>App</h1>
//       <ul>
//         {data.map((value, index) => <li key={index}>{value}</li>)}
//       </ul>
//     </>
//   )
// }

// # Q3. useRef, useState, useEffect를 사용해서 구현해보세요

// function App() {
//   console.log('App Loaded!');

//   // useRef() DOM element를 비동기적으로 반환한다.
//   const inputEl = useRef(null);
//   const [value, setValue] = useState("")

//   useEffect(() => {
//     inputEl.current.focus()
//   })

//   function handleChange(e) {
//     setValue(e.currentTarget.value);
//   }

//   return (
//     <>
//       <h1>App</h1>
//       <input type="text" ref={inputEl} onChange={handleChange} />
//       <p>{value}</p>
//     </>
//   )
// }

// # Composition(합성)과 useContext Hook

// function Form() {
//   return (
//     <>
//       <form>
//         <h1>Todo List</h1>
//         <input type="text" />
//       </form>
//     </>
//   )
// }

// function App() {
//   // App컴포넌트에서 Form컴포넌트를 담는다
//   // 컴포넌트를 재사용할 수 있다
//   return (
//     <>
//       <Form />
//     </>
//   )
// }

// function App() {
//   return (
//     <>
//       <h1>App</h1>
//       <hr />
//       <Component1 />
//     </>
//   )
// }

// function Component1() {
//   return (
//     <>
//       <h1>Component1</h1>
//       <Component2 />
//     </>
//   )
// }

// function Component2() {
//   return (
//     <>
//       <h2>Component2</h2>
//       <Component3 />
//     </>
//   )
// }

// function Component3() {
//   return (
//     <>
//       <h3>Component3</h3>
//       <p>...</p>
//     </>
//   )
// }

// # Composition (합성) 에서 props 전달하기

// function App() {
//   return (
//     <>
//       <h1>App</h1>
//       <hr />
//       <Component1 username="bunny" />
//     </>
//   )
// }

// function Component1(props) {
//   return (
//     <>
//       <h1>Component1</h1>
//       <Component2 username={props.username} />
//     </>
//   )
// }

// function Component2(props) {
//   return (
//     <>
//       <h2>Component2</h2>
//       <Component3 username={props.username} />
//     </>
//   )
// }

// function Component3(props) {
//   return (
//     <>
//       <h3>Component3</h3>
//       <p>{props.username}</p>
//     </>
//   )
// }

// const UserContext = createContext();

// function App() {

//   return (
//     <>
//       <h1>App</h1>
//       <hr />
//       <UserContext.Provider value="bunny">
//         <Component1 />
//       </UserContext.Provider>
//     </>
//   )
// }

// function Component1() {
//   return (
//     <>
//       <h1>Component1</h1>
//       <Component2 />
//     </>
//   )
// }

// function Component2() {
//   return (
//     <>
//       <h2>Component2</h2>
//       <Component3 />
//     </>
//   )
// }

// function Component3() {
//   const username = useContext(UserContext);

//   return (
//     <>
//       <h3>Component3</h3>
//       <p>{username}</p>
//     </>
//   )
// }

// function App() {
//   return (
//     <>
//       <h1>App</h1>
//       <hr />
//       <Component1>
//         <Component2>
//           <Component3 />
//         </Component2>
//       </Component1>
//     </>
//   )
// }

// function Component1(props) {
//   return (
//     <>
//       <h1>Component1</h1>
//       {props.children}
//     </>
//   )
// }

// function Component2(props) {
//   return (
//     <>
//       <h2>Component2</h2>
//       {props.children}
//     </>
//   )
// }

// function Component3() {
//   return (
//     <>
//       <h3>Component3</h3>
//     </>
//   )
// }

const UserContext = createContext();

function App() {
  return (
    <>
      <h1>App</h1>
      <hr />
      <UserContext.Provider value="bunny">
        <Component1>
          <Component2>
            <Component3 />
          </Component2>
        </Component1>
      </UserContext.Provider>
    </>
  )
}

function Component1(props) {
  return (
    <>
      <h1>Component1</h1>
      {props.children}
    </>
  )
}

function Component2(props) {
  return (
    <>
      <h2>Component2</h2>
      {props.children}
    </>
  )
}

function Component3() {
  const username = useContext(UserContext);
  
  return (
    <>
      <h3>Component3</h3>
      <p>{username}</p>
    </>
  )
}


// Render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

