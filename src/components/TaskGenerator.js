import React from 'react'

const TaskGenerator = ({tasks}) => {
    const randomTask = () => {
        const newTask = tasks[Math.floor(Math.random() * tasks.length)]
        console.log(newTask)
    }
    

    return (
        <div>
            <button onClick={randomTask} className="btn-dark btn ml-2" >Seuraava</button>
        </div>
    )
    
}

export default TaskGenerator;