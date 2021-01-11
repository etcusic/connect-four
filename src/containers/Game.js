import React, { Component } from 'react'
import GameBoard from './GameBoard'
import CardPanel from './CardPanel'
export class Game extends Component {
  render() {
    return (
      <div>
        <div id="game-board">
          <GameBoard />
        </div>
        <div id="card-panel">
          <CardPanel />
        </div>
      </div>
    )
  }
}

export default Game