import React from 'react'
import './task.css'

const TaskGenerator = ({task, player, handleNextTask}) => {



    return (
        <div className="task-background jumbotron">
            <p className="display-2">{task.description}</p>
            <button onClick={handleNextTask} className="btn-dark btn ml-2" >Next plz</button>
        </div>
    )    
}

export default TaskGenerator;