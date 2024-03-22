import React, {useState, useRef} from 'react';
import './App.css';

function App() {
  const inputRef = useRef()
  const [tasks, setTasks] = useState([])
   
  const addTask = ()=> {
    let val = inputRef.current.value
    const newData = { val, completed: false };
    setTasks([...tasks, newData]);
    inputRef.current.value = "";
  }
 
  function change(index) {
    let newTasks = [...tasks]
    tasks[index].completed=!tasks[index].completed;
    setTasks(newTasks);
  }

  const removeTask = (index)=> {
    const newTasks = [...tasks];
    newTasks.splice(index, 1)
    setTasks(newTasks);
  }
  
  return (
    <div className="container">
      <h1>Your To Do List</h1>
      <div className="inputs">
        <input ref={inputRef} type="text" placeholder="Enter Your Task..." />
        <button onClick={addTask}>Add</button>
      </div>
      <ul>
        {
          tasks.map((task, index) => {
            return (
                <div key={index}>
                  <li className={task.completed ? "done" : ""} onClick={() => change(index)}>
                    {task.val}
                  </li>
                  <span onClick={() => removeTask(index)}>✖️</span>
              </div>
            );
          })
        }
      </ul>
    </div>
  );
}

export default App;
