import React from 'react'

const GameSelector = ({ games }) => {
    return (
      <div>
        <div class="selector-title">Select Game:</div>
        <ul class="collection">
            { games.map(game => <li class="collection-item">{ game.name }</li>)}
        </ul>
      </div>
    )
}

export default GameSelector