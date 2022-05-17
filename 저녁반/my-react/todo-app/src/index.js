import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


// Form 
function Form(props) {
  console.log('Form Loaded!');

  const [name, setName] = useState("");

  // 새로운 Todo 아이템을 추가한다
  // input의 value를 다시 빈 칸으로 만든다.
  function handleSubmit(e) {
    e.preventDefault();

    // 빈문자가 제출되지 않도록 한다
    if (!name.trim()) {
      return;
    }
    // 새로운 todo item을 추가한다
    props.addTask(name)

    // input을 form이 제출된 뒤에 비운다
    setName("");
  }

  // name값을 변경시킨다
  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <div className="">
      <h2 className="text-center">What needs to be done?</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="w-100"
          type="text" 
          value={name} 
          onChange={handleChange} 
        />
        <button className="btn btn-secondary w-100 mt-15">Add</button>
      </form>
    </div>
  )
}

// FilterButton
function FilterButton(props) {
  return (
    <button 
      className="btn" 
      // filter를 변경한다
      onClick={() => props.setFilter(props.name)}
    >
    {props.name}
    </button>
  )
}

// Todo 
function Todo(props) {
  console.log('Todo Loaded!');

  // todo가 viewTemplate인지 editTemplate인지 나타낸다
  const [isEditing, setEditing] = useState(false);
  // 업데이트된 이름
  const [newName, setNewName] = useState("");

  // editimgTemplate의 text input
  const editFieldRef = useRef(null);
  // viewTemplate의 Edit 버튼
  const editButtonRef = useRef(null);
  // 이전 렌더링이 viewTemplate or editTemplate인지 나타낸다
  // true: editTemplate, false: viewTemplate
  const wasEditing = useRef(null);

  console.log('editFieldRef', editFieldRef);
  console.log('wasEditing', wasEditing);

  // return되고 나서 실행된다.
  useEffect(() => {
    // editTemplate에서 text input에 focus (커서가 깜빡인다)
    if (isEditing) {
      editFieldRef.current.focus();
    }
    // wasEditing: 이전의 렌더링에서 넘어온 값을 사용해야 한다.
    // 처음 로드되었을 제외, editTemplate 제외
    // Edit 버튼에 focus (outline 효과)
    if (!isEditing && wasEditing.current) {
      editButtonRef.current.focus();
    }
    // 렌더링 가장 마지막에 wasEditing.current 값을 담는다.
    wasEditing.current = isEditing;
  })

  function handleSubmit(e) {
    e.preventDefault();

    // Edit버튼을 누르고 수정하지 않고 Save를 눌렀을 때 
    if (!newName) {
      return;
    }

    props.editTask(props.id, newName.trim());
    // newName을 다시 빈문자로 만든다
    setNewName("");
    // 다시 viewTemplate으로 가도록 한다
    setEditing(false);
  }

  function handleChange(e) {
    setNewName(e.target.value);
  }

  const viewTemplate = (
    <div className="mt-15">
      <div className="p-tb-15 flex align-center">
        <input 
          className="cb-large"
          type="checkbox" 
          // props.completed: true or false
          defaultChecked={props.completed} 
          // task의 completed를 변경시킨다
          onChange={() => props.toggleTaskCompleted(props.id)} 
        />
        <label for="" className="m-left-5">
          {props.name}
        </label>
      </div>

      <div className="btn-group mt-15">       
        <button 
          className="btn"
          // EditTemplate으로 전환한다
          onClick={() => setEditing(true)}
          ref={editButtonRef}
        >
          Edit</button>
        {/* task를 삭제한다 */}
        <button 
          className="btn btn-danger" 
          onClick={() => props.deleteTask(props.id)}
        >Delete</button>
      </div>
    </div>
  )

  const editingTemplate = (
    <form onSubmit={handleSubmit}>
      <div className="">
        <p>New name for {props.name}</p>
        <input 
          className="w-100"
          type="text" 
          // 처음에 props.name을 가져오고 newName이 생기면 newName을 먼저 사용한다
          value={newName || props.name} 
          onChange={handleChange} 
          ref={editFieldRef}
        />  
      </div>
      <div className="btn-group mt-15">
        <button 
          className="btn" 
          type="button" 
          onClick={() => {
            // newName을 없에고 viewTemplate으로 전환한다
            setEditing(false);
            setNewName("");
          }}
        >Cancel</button>
        <button 
          className="btn btn-secondary"
          type="submit" 
        >Save</button>
      </div>
    </form>
  )

  return <li>{ isEditing ? editingTemplate : viewTemplate }</li>
}

// key: 필터이름, value: 조건
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
  const [filter, setFilter] = useState("All");

  // state를 추적한다
  console.log(tasks)

  // 필터 버튼
  const filterList = 
  FILTER_NAMES
  .map(name => <FilterButton key={name} name={name} setFilter={setFilter} />)
  
  // task 리스트
  const taskList = 
  tasks
  .filter(FILTER_MAP[filter]) // FILTER_MAP['All']
  .map(task => (
    <Todo 
      id={task.id} 
      deleteTask={deleteTask} 
      completed={task.completed}
      key={task.id} 
      name={task.name} 
      toggleTaskCompleted={toggleTaskCompleted}
      editTask={editTask}
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

  function editTask(id, newName) {
    const editedTaskList = tasks.map(task => {
      if (task.id === id) {
        return {...task, name: newName}
      }
      return task;
    })
    setTasks(editedTaskList);
  }

  // todo 항목의 갯수를 나타낸다
  const headingText = `${taskList.length} task(s) remaining`
  // headingText의 element를 가져온다
  const listHeadingRef = useRef(null);
  // 이전 렌더링의 tasks의 갯수 (state)
  const prevTaskLength = useRef(null);

  console.log('listHeadingRef', listHeadingRef);
  console.log('prevTaskLength', prevTaskLength);

  useEffect(() => {
    console.log('listHeadingRef', listHeadingRef)

    // tasks가 삭제되었을 때 headingText에 focus 효과
    if (tasks.length - prevTaskLength.current === -1) {
      listHeadingRef.current.focus();
    }

    // 렌더링 마지막에 tasks.length를 담는다
    prevTaskLength.current = tasks.length;
  })

  return (
    <div className="p-side-15">
      {/* 컴포넌트 가져올때 닫는 태그 필수! */}
      <Form addTask={addTask} />
      <div className="btn-group mt-15">
        {filterList}
      </div>
      <div className="mt-15">
        <h2 tabIndex="-1" ref={listHeadingRef}>
          {headingText}
        </h2>
      </div>
      <ul className="">
        {taskList}
      </ul>
    </div>
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
