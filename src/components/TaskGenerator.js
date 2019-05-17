import React from 'react'

const TaskGenerator = ({tasks}) => {
    const randomTask = () => {
        const newTask = tasks[Math.floor(Math.random() * tasks.length)]
        console.log(newTask)
    }
    

    return (
        <div>
            <button onClick={randomTask}>Seuraava</button>
        </div>
    )
    
}

export default TaskGenerator;