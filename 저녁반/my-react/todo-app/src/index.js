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

    if (!name.trim()) {
      return;
    }

    props.addTask(name)

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
      onClick={() => props.setFilter(props.name)}
    >
    {props.name}
    </button>
  )
}

// Todo 
function Todo(props) {
  console.log('Todo Loaded!');

  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState("");

  const editFieldRef = useRef(null);
  const editButtonRef = useRef(null);

  const wasEditing = useRef(null);

  console.log('editFieldRef', editFieldRef);
  console.log('wasEditing', wasEditing);

  // return되고 나서 실행된다.
  useEffect(() => {
    if (isEditing) {
      editFieldRef.current.focus();
    }
    // wasEditing: 이전의 렌더링에서 넘어온 값을 사용해야 한다.
    if (!isEditing && wasEditing.current) {
      // editButtonRef.current.style.backgroundColor = 'red';
      editButtonRef.current.focus();
    }

    wasEditing.current = isEditing;
  })

  function handleSubmit(e) {
    e.preventDefault();

    if (!newName) {
      return;
    }

    props.editTask(props.id, newName.trim());
    setNewName("");
    // 다시 viewTemplate으로 가도록 한다
    setEditing(false);
  }

  function handleChange(e) {
    setNewName(e.target.value);
  }

  const viewTemplate = (
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
      <button 
        onClick={() => setEditing(true)}
        ref={editButtonRef}
      >Edit</button>
      {/* task를 삭제한다 */}
      <button onClick={() => props.deleteTask(props.id)}>Delete</button>
    </>
  );

  const editingTemplate = (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={newName || props.name} 
          onChange={handleChange} 
          ref={editFieldRef}
        />
        <div className="btn-group">
          <button 
            type="button" 
            onClick={() => {
              setEditing(false);
              setNewName("");
            }}
          >
            Cancel
          </button>
          <button>Save</button>
        </div>
      </form>
    </>
  );

  return <li>{ isEditing ? editingTemplate : viewTemplate }</li>
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
  const [filter, setFilter] = useState("All");

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

  const headingText = `${taskList.length} task(s) remaining`
  const listHeadingRef = useRef(null);
  const prevTaskLength = useRef(null);

  console.log('listHeadingRef', listHeadingRef);
  console.log('prevTaskLength', prevTaskLength);

  useEffect(() => {
    console.log('listHeadingRef', listHeadingRef)

    if (tasks.length - prevTaskLength.current === -1) {
      listHeadingRef.current.focus();
    }

    prevTaskLength.current = tasks.length;
  })

  return (
    <>
      <Form addTask={addTask} />
      {filterList}
      <h2 tabIndex="-1" ref={listHeadingRef}>
        {headingText}
      </h2>
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
