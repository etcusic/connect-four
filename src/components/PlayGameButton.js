import React from 'react'

const PlayGameButton = ({ initializeGame }) => {
    return (
        <button id="play-game-button" class=" btn-large" onClick={() => initializeGame()}>PLAY GAME</button>
    )
}

export default PlayGameButton