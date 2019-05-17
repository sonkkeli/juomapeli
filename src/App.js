import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import TaskGenerator from './components/TaskGenerator'

const tasks = require('./tasks.json');
console.log(tasks)

const App = () => {
  const [player,newPlayer] = useState([])
  const [task, setTask] = useState([])
  const [playerFiel,newPlayerFiel] = useState("")

  const handleNextTask = (event) => {
    event.preventDefault()
    setTask(randomTask)
    console.log(task)
  }

  const randomTask = () => {
    return tasks[Math.floor(Math.random() * tasks.length)]
  }

  const addNewPlayer = (event) => {
    event.preventDefault()
    const copy = [...player]
    copy.push(playerFiel)
    newPlayer(copy)
    console.log(player.length)
  }

  const changePlayerInputFied = (event) => {
    newPlayerFiel(event.target.value)
    console.log(playerFiel)
  }

  return (
    <div className="text-center" >
      <div className="jumbotron">
        <form onSubmit={addNewPlayer}>
          <input
            value={playerFiel}
            onChange={changePlayerInputFied}
          />
          <button className="btn-dark btn ml-2" type="submit">tallenna</button>
        </form>
      </div>
       

      <div className="jumbotron" >
        <TaskGenerator task={task} handleNextTask={handleNextTask}/>
      </div>      
    </div>
  );
}

export default App;
