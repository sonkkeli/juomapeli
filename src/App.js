import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import TaskGenerator from './components/TaskGenerator'

const tasks = require('./tasks.json');
console.log(tasks)

const App = () => {
  const [player,newPlayer] = useState([])
  const [playerFiel,newPlayerFiel] = useState("")

  const addNewPlayer = (event) => {
    event.preventDefault()
    let player = event.targer.value
    const newList = [...player]
    newList.push(player)
    newPlayer(newList)
  }

  const changePlayerInputFied = (event) => {
    newPlayerFiel(event.target.value)
  }

  return (
    <div className="App">¨
      <TaskGenerator tasks={tasks}/>
       {/* <form onSubmit={}>
        <input
          value={playerFiel}
          onChange={changePlayerInputFied}
        />
        <button type="submit">tallenna</button>
      </form> */}
    </div>
  );
}

export default App;
