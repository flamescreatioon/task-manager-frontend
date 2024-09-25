import React, {useState} from "react";

const TaskItem = ({ task, index, updateTask, removeTask}) =>{

    const [isEditing, setIsEditing] = useState(false);
    const[newTask, setNewTask] = useState(task);
    const [isCompleted, setIsCompleted] = useState(task.completed);

    const handleEdit = () => {
        if(isEditing){
            updateTask(index, newTask);
        }
        setIsEditing(!isEditing);
    }

    const toggleCompleted = () => {
        setIsCompleted(!isCompleted);
        updateTask(index, {name: task.name, completed: !isCompleted})
    }

    return(
        <div className="task-item">
            <input
                type="checkbox"
                checked={isCompleted}
                onChange={toggleCompleted}
            />
            {isEditing ? (
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />
            ):( 
            <span style={{textDecoration: isCompleted ? 'line-through' : 'none'}}>
                {task.name}
                </span>
                )}
            <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
            <button onClick={removeTask}>Delete Task</button>
        </div>
    )
}

export default TaskItem