import React from 'react'
import './task.css'

const Player = ({players}) =>{

    return (
        players
        .map(
            player => 
            <span className="player-list" key={player}>{player} </span>
        )
    )
    
} 

export default Player