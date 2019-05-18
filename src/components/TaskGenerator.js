import React from 'react'
import './task.css'

const TaskGenerator = ({task, player, handleNextTask}) => {

    const whoPlays = () => {
        if (player){
            return <p className="task-info">Next gamer is: {player}</p>
        }
    }

    const howManySips = () => {
        if(task.id){
            const amount= Math.floor(Math.random() * 5) + 2        
            return <p className="task-info">The bet is {amount} sips</p>
        }        
    }

    return (
        <div className="jumbotron">
            {whoPlays()}
            <p className="task-text"><span className="task-text-background">{task.description}</span></p>
            {howManySips()}
            <button onClick={handleNextTask} className="btn-dark btn ml-2 mb-4" >Next plz</button>
        </div>
    )    
}

export default TaskGenerator;