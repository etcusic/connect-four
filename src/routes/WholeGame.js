import React, { Component } from 'react'
import { connect } from 'react-redux'
import LeftCards from '../containers/LeftCards'

class WholeGame extends Component {

  constructor() {
    super()
    // this.state = this.props.game
    this.state = {
      tokens: this.initializeTokens(),
      turn: 1,
      over: false,
      header: ""
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

  generateRow = (tokenArray) => {
    let cells = tokenArray.map(token => <td className="cell">{ token }</td>)
    return cells.map(cell => cell)
  }

  handleClick = (index) => {
        let matrix = this.state.tokens
        let column = matrix.map(row => row[index])
        let rowNum = column.findIndex(token => token.props.color === "whitesmoke")
        this.makeMove(matrix, rowNum, index)
        this.checkWinner({row: rowNum, col: index})
    }

    createButtons = () => {
        let buttons = []
        for (let i = 0; i < 7; i++){
            buttons.push(<TokenButton number={i + 1} handleClick={() => this.handleClick(i)} />)
        }
        return buttons.map(map => map)
    }

    tryAgain(){
        this.setState({
            tokens: this.state,
            turn: this.state.turn,
            over: false,
            header: "INVALID MOVE, TRY AGAIN!!"
        })
    }

    notValid(col){
        return this.state.tokens[5][col].props.color !== "whitesmoke"
    }

    executeMove(matrix){
        this.setState({
            tokens: matrix,
            turn: this.state.turn += 1,
            over: false,
            header: this.state.header
        })
    }

    makeMove = (matrix, rowNum, colNum) => {
        if (this.notValid(colNum)){
            this.tryAgain()
        } else if (this.state.turn % 2 === 0){
            matrix[rowNum][colNum] = <Token row={rowNum} column={colNum} color={ "blue" } />  
            this.executeMove(matrix)
        } else {
            matrix[rowNum][colNum] = <Token row={rowNum} column={colNum} color={ "red" } />
            this.executeMove(matrix)
        }
        
    }

    currentToken(index){
        return this.state.tokens[index. row][index.col]
    }

    fourInaRow(array, currentT){
        for (let i = 0; i < 4; i++){
            let slicedArr = array.slice(i, (i + 4))
            if (slicedArr.length === 4 && slicedArr.every(token => token.props.color === currentT.props.color)){
                console.log("game over") // need to implement a game over function
                this.setState({
                    tokens: this.state.tokens,
                    turn: this.state.turn += 1,
                    over: true,
                    header: "GAME OVER"
                })
                let buttonRow = document.getElementById('button-row')
                buttonRow.remove()                
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

  render() {
    return (
      <div>
        <h1>{this.state.header}</h1>
        <LeftCards cards={ [] } />
        <div id="game-board">
            <table id="game-board-table">
                <tbody>
                    <tr className="token-row">{ this.generateRow(this.state.tokens[5]) }</tr>
                    <tr className="token-row">{ this.generateRow(this.state.tokens[4]) }</tr>
                    <tr className="token-row">{ this.generateRow(this.state.tokens[3]) }</tr>
                    <tr className="token-row">{ this.generateRow(this.state.tokens[2]) }</tr>
                    <tr className="token-row">{ this.generateRow(this.state.tokens[1]) }</tr>
                    <tr className="token-row">{ this.generateRow(this.state.tokens[0]) }</tr>
                    <tr id="button-row">{ this.generateRow(this.createButtons()) }</tr>
                </tbody>
            </table>
        </div>
      </div>
    )
  }
}

const Token = ({ row, column, color }) => {
    return <div id={`${row}-${column}`} className="token" style={{backgroundColor: `${color}`}}></div>  
}

const TokenButton = ({ number, handleClick }) => {
    return (
      <div className="token-button" onClick={handleClick}>
        <div className="button-number">{ number }</div>
      </div>
    )
}
const mapStateToProps = state => {
    return {
      apiInfo: state.apiInfo,
      session: state.session,
      game: state.game
    }
}
  
export default connect(mapStateToProps)(WholeGame)
// export default WholeGame