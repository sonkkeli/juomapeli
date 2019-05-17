import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css'

const App = () => {
  const [player,newPlayer] = useState([])
  const [playerFiel,newPlayerFiel] = useState("")

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
    console.log(playerFiel)
  }

  return (
    <div className="App">
       <form onSubmit={addNewPlayer}>
        <input
          value={playerFiel}
          onChange={changePlayerInputFied}
        />
        <button type="submit">tallenna</button>
      </form>
    </div>
  );
}

export default App;
