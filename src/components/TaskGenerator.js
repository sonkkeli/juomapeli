import React from 'react'
import './task.css'

const TaskGenerator = ({task, player, handleNextTask}) => {

    const whoPlays = () => {
        if (player){
            return <p className="task-info">Next gamer is: {player} and {howManySips()}</p>
        }
    }

    const howManySips = () => {
        if(task.id){
            const amount= Math.floor(Math.random() * 5) + 2        
            return <span className="task-info">the bet is {amount} sips</span>
        }        
    }

    return (
        <div className="jumbotron mt-2">
            {whoPlays()}
            <p className="task-text"><span className="task-text-background">{task.description}</span></p>
            
            <button onClick={handleNextTask} className="btn-dark btn ml-2 mb-4" >Next plz</button>
        </div>
    )    
}

export default TaskGenerator;