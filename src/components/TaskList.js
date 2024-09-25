import React from "react";
import TaskItem from './TaskItem'

const TaskList = ({tasks, updateTask, removeTask}) => {
    return (
        <div>
            {tasks.map((task, index) => (
                <TaskItem 
                key={index} 
                task={task} 
                index={index}
                updateTask={updateTask}
                removeTask={()=> removeTask(index)} />
            ))}
        </div>
    )
}

export default TaskList