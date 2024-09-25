import React, {useState} from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import './App.css';

function App(){
  const [tasks, setTasks] = useState([]);

  const addTask =(task) =>{
    setTasks([...tasks, task]);
  }
  const removeTask = (index) => {
    const newTasks = tasks.filter((task, i) => i !== index)
    setTasks(newTasks);
  }

  return(
    <div className="App">
      <h1>Task Manager</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} removeTask={removeTask} />
    </div>
  )
}

export default App;