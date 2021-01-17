import React from 'react'
import { connect } from 'react-redux'

const GoToGameButton = ({ cards, initializeGame }) => {
    return (
      <div class="three-percent center" id="button-div">
      {console.log(cards)}
        <button class="btn white-smoke waves-effect" onClick={() => initializeGame(cards) }>Go To Game</button>
      </div>
    )
}

export default GoToGameButton