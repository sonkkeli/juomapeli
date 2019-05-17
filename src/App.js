import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import TaskGenerator from './components/TaskGenerator'

const tasks = require('./tasks.json');
console.log(tasks)

const App = () => {
  const [player,newPlayer] = useState([])
  const [playerFiel,newPlayerFiel] = useState("")

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
    <div >
      <div className="navbar navbar-light bg-light">
        <form onSubmit={addNewPlayer}>
          <input
            value={playerFiel}
            onChange={changePlayerInputFied}
          />
          <button className="btn-dark btn ml-2" type="submit">tallenna</button>
        </form>
      </div>
       

      <div className="jumbotron" >
        <TaskGenerator tasks={tasks}/>
      </div>      
    </div>
  );
}

export default App;
