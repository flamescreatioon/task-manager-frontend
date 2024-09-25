import React from "react";

const TaskItem = ({ task, removeTask}) =>{

    return(
        <div className="task-item">
            <span>{task}</span>
            <button onClick={removeTask}>Delete Task</button>
        </div>
    )
}

export default TaskItem