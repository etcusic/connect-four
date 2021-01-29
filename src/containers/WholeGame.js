import React, { Component } from 'react'
import Token from '../components/Token'
import LeftCard from '../components/LeftCard'
import RightCard from '../components/RightCard'
import GameHeader from './GameHeader'
import PlayGameButton from '../components/PlayGameButton'
import TableBody from '../components/TableBody'

class WholeGame extends Component {

  constructor() {
    super()
    this.state = {
      tokens: this.initializeTokens(),
      cards: this.generateCards(),
      leftCards: [],
      rightCards: [],
      header: "GAME READY!",
      turn: 1
    }
  }

  initializeGame = () => {
    this.shuffleAndDeal(this.props.cards)
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

  generateCards(){
      let array = []
      for (let i = 0; i < 7; i++) {
        array.push({side_a: "", side_b: ""})
      }
      return array
  }
  
  shuffle (arrayOfCards) {
    return arrayOfCards.sort(() => Math.random() - 0.5)
  }

  shuffleAndDeal(arr){
      let shuffled = this.shuffle(arr)
      this.setState({
        tokens: this.state.tokens,
        cards: shuffled,
        leftCards: this.generateLeftCards(shuffled.slice(0,7)),
        rightCards: this.generateRightCards(shuffled.slice(0,7)),
        turn: this.state.turn,
        header: this.props.deck.title
    })       
  }

  generateLeftCards(arr){
    return arr.map((card, index) => <LeftCard info={card} number={index} />)
  }

  generateRightCards(arr){
    let rightCards = arr.map((card, index) => <RightCard index={index} info={card} handleClick={() => this.handleClick(index)} />)
    let shuffled = this.shuffle(rightCards)
    return shuffled
  }

  handleClick = (index) => {
    // remove this card from state
        // let card = this.state.cards[index]
        let matrix = this.state.tokens
        let column = matrix.map(row => row[index])
        let rowNum = column.findIndex(token => token.props.color === "whitesmoke")
        this.makeMove(matrix, rowNum, index)
  }

  tryAgain(){
      this.setState({ ...this.state, header: "INVALID MOVE, TRY AGAIN!!" })
  }

  invalid(col){
      return this.state.tokens[5][col].props.color !== "whitesmoke"
  }

  executeMove(matrix, index){
      let updatedCards = this.state.cards.filter((card, i) => i !== index)
      this.setState({ ...this.state, cards: updatedCards, tokens: matrix, turn: this.state.turn + 1 })
  }

  async waitASec () {
    await new Promise(resolve => setTimeout(resolve, 1500))
    this.computerMove()
  }

  makeMove = (matrix, rowNum, index) => {
      if (this.invalid(index)){
          this.tryAgain()
      } else {
          matrix[rowNum][index] = <Token row={rowNum} column={index} color={ "blue" } />
          this.executeMove(matrix, index)
          this.checkWinner({row: rowNum, col: index})
          this.waitASec()
      }
  }

  computerMove = () => {
    let rando = Math.floor(Math.random() * Math.floor(7))
    let matrix = this.state.tokens
    let rowNum = matrix.map(row => row[rando]).findIndex(token => token.props.color === "whitesmoke")
    if (this.invalid(rando)){
      this.computerMove()
    } else {
      matrix[rowNum][rando] = <Token row={rowNum} column={rando} color={ "red" } />
      this.executeMove(matrix)
      this.checkWinner({row: rowNum, col: rando})
      this.shuffleAndDeal(this.state.cards)
    }
  }

  currentToken(index){
      return this.state.tokens[index.row][index.col]
  }

  winOrLose(){
    if (this.state.turn % 2 === 0){
      return "lost"
    } else {
      return "won"
    }
  }

  fourInaRow = (array, currentT) => {
      for (let i = 0; i < 4; i++){
          let slicedArr = array.slice(i, (i + 4))
          if (slicedArr.length === 4 && slicedArr.every(token => token.props.color === currentT.props.color)){
              // need to discern outcome - use separate function
              let time = parseInt(document.getElementById('timer-number').innerHTML)
              this.props.endGame({deck_id: this.props.deck.id, time: time, outcome: this.winOrLose()})
          }
      }
  }

  diagonalUpRight(index){
      let arr = []
      let row = index.row + 1
      let col = index.col + 1
      while (row < 6 && col < 7){
          arr.push(this.state.tokens[row][col])
          row += 1
          col += 1
      }
      return arr
  }

  diagonalUpLeft(index){
      let arr = []
      let row = index.row + 1
      let col = index.col - 1
      while (row < 6 && col > -1){
          arr.push(this.state.tokens[row][col])
          row += 1
          col -= 1
      }
      return arr.reverse()
  }

  diagonalDownLeft(index){
      let arr = []
      let row = index.row - 1
      let col = index.col - 1
      while (row > -1 && col > -1){
          arr.push(this.state.tokens[row][col])
          row -= 1
          col -= 1
      }
      return arr.reverse()
  }

  diagonalDownRight(index){
      let arr = []
      let row = index.row - 1
      let col = index.col + 1
      while (row > -1 && col > -1){
          arr.push(this.state.tokens[row][col])
          row -= 1
          col += 1
      }
      return arr
  }

  checkDiagonalRight(index){
      let currentT = this.currentToken(index)
      let arr = [...this.diagonalDownLeft(index), currentT, ...this.diagonalUpRight(index)]
      this.fourInaRow(arr, currentT)
  }

  checkDiagonalLeft(index){
      let currentT = this.currentToken(index)
      let arr = [...this.diagonalUpLeft(index), currentT, ...this.diagonalDownRight(index)].filter(token => token)
      this.fourInaRow(arr, currentT)
  }

  checkVerticals(index){
      let currentT = this.currentToken(index)
      let column = this.state.tokens.map(row => row[index.col])
      this.fourInaRow(column, currentT)
  }

  checkHorizontals(index){
      let currentT = this.currentToken(index)
      let row = this.state.tokens[index.row]
      this.fourInaRow(row, currentT)
  }

  checkWinner(index){
      this.checkVerticals(index)
      this.checkHorizontals(index)
      this.checkDiagonalRight(index)
      this.checkDiagonalLeft(index)
  }

  // generateRow = (tokenArray) => {
  //   let cells = tokenArray.map((token, i) => <td className="cell" key={i.toString()}>{ token }</td>)
  //   return cells.map(cell => cell)
  // }

  render() {
    return (
      <div className="row">
        
        <div className="col s2">
            { this.state.leftCards.map(card => card) }
        </div>

        <div className="col s8"> 
            <header className="center">
              { this.state.header === "GAME READY!" ? <PlayGameButton initializeGame={ this.initializeGame } /> : <GameHeader header={this.state.header} /> }
            </header>
            
            <div id="game-board" className="col s12">
              <TableBody tokens={this.state.tokens} />
            </div>
        </div>

        <div className="col s2">
            { this.state.rightCards.map(card => card) }
        </div>

      </div>
    )
  }
}

export default WholeGame
