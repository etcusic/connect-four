import React, { Component } from 'react'
import GameBoard from './GameBoard'
import CardPanel from './CardPanel'
import Token from '../components/Token'
// import { connect } from 'react-redux'
export class Game extends Component {

  constructor() {
    super()
    this.state = {
      tokens: this.initializeTokens(),
      practice: "INITIAL STATE"
    }
  }

  initializeTokens() {
    let nestedArray = []
    for (let i = 0; i < 6; i++) {
      let rowArray = []
      for (let j = 0; j < 7; j++) {
        rowArray.push(<Token row={i} column={j} color={ "whitesmoke" } />)
      }
      nestedArray.push(rowArray)  
    }
    return nestedArray
  }

  render() {
    return (
      <div>
        <div id="card-panel">
          <CardPanel />
        </div>
        <div id="game-board">
          <GameBoard tokens={ this.state.tokens } practice={ this.state.practice } />
        </div>
      </div>
    )
  }
}

// const mapStateToProps = state => {
//   return {
//     tokens: state.tokens
//   }
// }

// export default connect(mapStateToProps, { fetchPets })(Game)

export default Game