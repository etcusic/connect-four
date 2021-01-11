import React, { Component } from 'react'
import GameBoard from './GameBoard'
import CardPanel from './CardPanel'
import Token from '../components/Token'

export class Game extends Component {

  constructor() {
    super()
    this.state = {
      // create a game class and return object like previous project

      // is there a better way to do this???
      tokensArray: [
        [<Token />, <Token />, <Token />, <Token />, <Token />, <Token />, <Token />],
        [<Token />, <Token />, <Token />, <Token />, <Token />, <Token />, <Token />],
        [<Token />, <Token />, <Token />, <Token />, <Token />, <Token />, <Token />],
        [<Token />, <Token />, <Token />, <Token />, <Token />, <Token />, <Token />],
        [<Token />, <Token />, <Token />, <Token />, <Token />, <Token />, <Token />],
        [<Token />, <Token />, <Token />, <Token />, <Token />, <Token />, <Token />]
      ]
    }
  }

  render() {
    return (
      <div>
        <div id="card-panel">
          <CardPanel />
        </div>
        <div id="game-board">
          <GameBoard />
        </div>
      </div>
    )
  }
}

export default Game