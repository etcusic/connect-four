import React, { Component } from 'react'
import GameBoard from './GameBoard'
import CardPanel from './CardPanel'
import Token from '../components/Token'
import TokenButton from '../components/TokenButton'
import { connect } from 'react-redux'
import { changeSomething } from '../actions/index'

class Game extends Component {

  constructor() {
    super()
    this.state = {
      tokens: this.initializeTokens(),
      buttons: this.createButtons(),
      practice: "INITIAL STATE"
    }
    console.log(this.state)
  }

  initializeTokens() {
    let nestedArray = []
    for (let i = 0; i < 6; i++) {
      let rowArray = []
      for (let j = 0; j < 7; j++) {
        rowArray.push(<Token row={i} column={j} color={ "whitesmoke" } changeColor={ this.changeColor } />)
      }
      nestedArray.push(rowArray)  
    }
    return nestedArray
  }

  handleClick = (index) => {
    this.props.changeSomething({tokens: this.state.tokens, buttons: this.state.buttons, practice: this.state.practice})
    console.log(this.state)
    console.log(this.props)
}

createButtons = () => {
    let buttons = []
    for (let i = 0; i < 7; i++){
        buttons.push(<TokenButton number={i + 1} handleClick={() => this.handleClick(i)} />)
    }
    return buttons.map(button => button)
}

  render() {
    return (
      <div>

        {/* I just want to change this one thing using redux */}
        <h1>{this.props.practice}</h1>

        <div id="card-panel">
          <CardPanel />
        </div>
        <div id="game-board">
          <GameBoard tokens={ this.state.tokens } practice={ this.state.practice } buttons={ this.state.buttons } />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    tokens: state.game.tokens, 
    practice: state.game.practice
  }
}

export default connect(mapStateToProps, { changeSomething })(Game)