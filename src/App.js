import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import TaskGenerator from './components/TaskGenerator'
import Player from './components/Player'


const tasks = require('./tasks.json');
console.log(tasks)

const App = () => {
  const [player,newPlayer] = useState([])
  const [task, setTask] = useState([])
  const [playerFiel,newPlayerFiel] = useState("")
  const [ chosenPlayer, setChosenPlayer ] = useState("")

  const handleNextTask = (event) => {
    event.preventDefault()
    const randomTask =tasks[Math.floor(Math.random() * tasks.length)]
    setTask(randomTask)
    console.log(task)

    const randomPlayer =player[Math.floor(Math.random() * player.length)]
    setChosenPlayer(randomPlayer)
    console.log(chosenPlayer)
  }

  const addNewPlayer = (event) => {
    event.preventDefault()
    const copy = [...player]
    copy.push(playerFiel)
    newPlayer(copy)
    console.log(player)
    newPlayerFiel("")
  }

  const changePlayerInputFied = (event) => {
    newPlayerFiel(event.target.value)
    // console.log(playerFiel)
  }

  const printPlayers = () => player.map(string => 
  <Player name = {string}/>
  )

  

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
      
      <div>
        {printPlayers()}
      </div>
       

      <div  >
        <TaskGenerator task={task} player={chosenPlayer} handleNextTask={handleNextTask}/>
      </div>      
    </div>
  );
}

export default App;
