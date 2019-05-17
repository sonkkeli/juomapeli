import React from 'react'

const TaskGenerator = ({task, handleNextTask}) => {

    return (
        <div>
            <p className="display-4">{task.description}</p>
            <button onClick={handleNextTask} className="btn-dark btn ml-2" >Next plz</button>
        </div>
    )
    
}

export default TaskGenerator;