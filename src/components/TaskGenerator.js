import React from 'react'
import './task.css'

const TaskGenerator = ({task, player, handleNextTask}) => {

    const whoPlays = () => {
        if (player){
            return <p className="display-4">Today's gamer is: {player}</p>
        }
    }

    return (
        <div className="task-background jumbotron">
            {whoPlays()}
            <p className="display-2">{task.description}</p>
            <button onClick={handleNextTask} className="btn-dark btn ml-2" >Next plz</button>
        </div>
    )    
}

export default TaskGenerator;