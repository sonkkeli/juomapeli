import React,{useState} from 'react';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'

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
    <div className="App">
       <form onSubmit={addNote}>
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
