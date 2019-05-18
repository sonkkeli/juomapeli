import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import TaskGenerator from './components/TaskGenerator'
import Player from './components/Player'
import './components/task.css'


const tasks = require('./tasks.json');

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

    const randomPlayer = player[Math.floor(Math.random() * player.length)]
    setChosenPlayer(randomPlayer)
    console.log(chosenPlayer)
  }

  const addNewPlayer = (event) => {
    event.preventDefault()
    const copy = [...player]

    let uusipelaaja = ''

    if (playerFiel.length > 1){
      uusipelaaja = playerFiel[0].toUpperCase() + playerFiel.slice(1);
      copy.push(uusipelaaja)
      newPlayer(copy)
      newPlayerFiel("")
      console.log(uusipelaaja)
    } 
    
    if (playerFiel.length === 1){
      uusipelaaja = playerFiel[0].toUpperCase()
      copy.push(uusipelaaja)
      newPlayer(copy)
      newPlayerFiel("")
      console.log(uusipelaaja)
    }
  }

  const changePlayerInputFied = (event) => {
    newPlayerFiel(event.target.value)
  }

  const hasPlayers = () => {
    if (player.length > 0){
        return <span className="player-list">Tonight's players: </span>
    }
  }
  

  return (
    <div className="text-center background2" >
      <div className="mt-4 mb-4">        
        <form onSubmit={addNewPlayer}>
          <span className="player-list">Add players: </span>
          <input
            value={playerFiel}
            onChange={changePlayerInputFied}
          />
          <button className="btn-dark btn ml-2" type="submit">Save</button>
        </form>
      </div>
      
      <div>
        {hasPlayers()}
        <Player players={player}/>
        
      </div>       

      <div>
        <TaskGenerator task={task} player={chosenPlayer} handleNextTask={handleNextTask}/>
      </div>
      <div className="footer player-list">Rules in short: Bet means that either you give or you drink.</div>   
    </div>
  );
}

export default App;
