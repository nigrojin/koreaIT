import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom/client';


// Form 
function Form(props) {
  console.log('Form Loaded!');

  const [name, setName] = useState("");

  // 새로운 Todo 아이템을 추가한다
  // input의 value를 다시 빈 칸으로 만든다.
  function handleSubmit(e) {
    e.preventDefault();

    props.addTask(name)

    setName("");
  }

  // name값을 변경시킨다
  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={handleChange} />
      <button>Add</button>
    </form>
  )
}

// FilterButton
function FilterButton(props) {
  return (
    <button>{props.name}</button>
  )
}

// Todo 
function Todo(props) {
  console.log('Todo Loaded!');

  return (
    <>
      <div>
        <input 
          type="checkbox" 
          // props.completed: true or false
          defaultChecked={props.completed} 
          // task의 completed를 변경시킨다
          onChange={() => props.toggleTaskCompleted(props.id)} 
        />
        {props.name}
      </div>
      <button>Edit</button>
      {/* task를 삭제한다 */}
      <button onClick={() => props.deleteTask(props.id)}>Delete</button>
    </>
  )
}

const FILTER_MAP = {
  All: () => true,
  Active: task => !task.completed,
  Completed: task => task.completed
}

// 필터 이름을 Array로 리턴한다
const FILTER_NAMES = Object.keys(FILTER_MAP);
console.log(FILTER_NAMES)


// 컴포넌트들을 모으는 곳
// App에서 만든 함수들을 다른 컴포넌트에 배분할 수 있다.
function App(props) {
  console.log('App Loaded!');

  // useState(initialValue, state를 업데이트시키는 함수)
  const [tasks, setTasks] = useState(props.tasks);

  console.log(tasks)

  // 필터 버튼
  const filterList = FILTER_NAMES.map(name => <FilterButton key={name} name={name} />)
  
  // task 리스트
  const taskList = tasks
  .map(task => (
    <Todo 
      id={task.id} 
      deleteTask={deleteTask} 
      completed={task.completed}
      key={task.id} 
      name={task.name} 
      toggleTaskCompleted={toggleTaskCompleted}
    />
  ))

  // 새로운 task를 추가한다
  function addTask(name) {
    const newTask = { id: "todo-" + Math.random(), name: name, completed: false };
    setTasks([...tasks, newTask]);
  }

  // task를 삭제한다
  function deleteTask(id) {
    const remainingTasks = tasks.filter(task => id !== task.id)
    setTasks(remainingTasks)
  }

  // task의 completed 상태를 변경시킨다
  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map(task => {
      if (id === task.id) {
        return {...task, completed: !task.completed}
      }
      return task;
    })

    setTasks(updatedTasks);
  }

  return (
    <>
      <h1>What needs to be done?</h1>
      <Form addTask={addTask} />
      {filterList}
      <ul>
        {taskList}
      </ul>
    </>
  )
}

// App 컴포넌트에 통과되는 props
const DATA = [
  { id: 'todo-0', name: '운동하기', completed: true },
  { id: 'todo-1', name: '밥먹기', completed: false },
  { id: 'todo-2', name: '놀러가기', completed: false },
]

// Todo 컴포넌트
// App
// Form
// FilterButton
// Todo

// 완성된 App컴포넌트를 출력한다
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App tasks={DATA} />);
