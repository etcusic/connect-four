import React, { Component } from 'react'
import GameBoard from './GameBoard'
import CardPanel from './CardPanel'
import Token from '../components/Token'

export class Game extends Component {

  constructor() {
    super()
    this.state = {
      tokens: this.initializeTokens()
    }
  }

  initializeTokens() {
    let nestedArray = []
    for (let i = 0; i < 6; i++) {
      let rowArray = []
      for (let j = 0; j < 7; j++) {
        rowArray.push(<Token coordinates={[j, i]} color={"F5F5F5"}/>)
      }
      nestedArray.push(rowArray)  
    }
    console.log(nestedArray)
    return nestedArray
  }

  render() {
    {console.log(this.state)}
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