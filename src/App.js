import React, {useState, useEffect} from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import './App.css';

function App(){
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage)
    if(storedTasks){
      setTasks(storedTasks)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  })

  const addTask =(task) =>{
    setTasks([...tasks, { name: task, completed: false}]);
  }
  const removeTask = (index) => {
    const newTasks = tasks.filter((task, i) => i !== index)
    setTasks(newTasks);
  }

  const updateTask = (index, newTask) => {
   const updateTask = tasks.map((task, i)=>( i === index ? newTask : task))
   setTasks(updateTask);
  }
 
  return(
    <div className="App">
      <h1>Task Manager</h1>
      <TaskForm 
      addTask={addTask} 
      />
      <TaskList 
      tasks={tasks} 
      updateTask={updateTask}
      removeTask={removeTask} />
    </div>
  )
}

export default App;