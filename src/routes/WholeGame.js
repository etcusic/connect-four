import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCards } from '../actions/index'

class WholeGame extends Component {

  constructor() {
    super()
    this.state = {
      tokens: this.initializeTokens(),
      cards: this.generateCards(),
      leftCards: [],
      rightCards: [],
      turn: 1,
      over: false,
      header: ""
    }
  }

  componentDidMount() {
    this.props.fetchCards(1)
    let shuffled = this.shuffle(this.props.apiInfo.cards)
    this.setState({
        tokens: this.state.tokens,
        cards: shuffled,
        leftCards: this.generateLeftCards(shuffled.slice(0,7)),
        rightCards: this.generateRightCards(shuffled.slice(0,7)),
        turn: this.state.turn,
        over: false,
        header: "GAME READY!"
    })
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

  createButtons = () => {
    let buttons = []
    for (let i = 0; i < 7; i++){
        buttons.push(<TokenButton number={i + 1} />)
    }
    return buttons.map(map => map)
  }

  generateCards(){
      let array = []
      for (let i = 0; i < 7; i++) {
        array.push({side_a: "", side_b: ""})
      }
      return array
  }

  shuffleAndDeal(arr){
      console.log(arr)
      let shuffled = this.shuffle(arr)
      this.setState({
        tokens: this.state.tokens,
        cards: shuffled,
        leftCards: this.generateLeftCards(shuffled.slice(0,7)),
        rightCards: this.generateRightCards(shuffled.slice(0,7)),
        turn: this.state.turn,
        over: false,
        header: ""
    })       
  }

  generateLeftCards(arr){
    return arr.map((card, index) => <LeftCard info={card} number={index} />)
  }

  generateRightCards(arr){
    let rightCards = arr.map((card, index) => <RightCard info={card} handleClick={() => this.handleClick(index)} />)
    let shuffled = this.shuffle(rightCards)
    return shuffled
  }
  
  shuffle (arrayOfCards) {
    return arrayOfCards.sort(() => Math.random() - 0.5)
  }

  handleClick = (index) => {
        let matrix = this.state.tokens
        let column = matrix.map(row => row[index])
        let rowNum = column.findIndex(token => token.props.color === "whitesmoke")
        this.makeMove(matrix, rowNum, index)
        this.checkWinner({row: rowNum, col: index})
    }

    tryAgain(){
        this.setState({
            tokens: this.state.tokens,
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
        if (this.state.over === false){
            console.log(this.state.cards[index.col])
            let arr = this.state.cards
            arr.splice(index.col, 1)
            this.shuffleAndDeal(arr)
        }
    }

  render() {
    return (
      <div class="row">
        
        <div class="col s2">
            { this.state.leftCards.map(card => card) }
        </div>

        <div class="col s8">
            <h2 class="center">{this.state.header}</h2>
            <div id="game-board" class="col s12">
                <table id="game-board-table" class="center">
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

        <div class="col s2">
            { this.state.rightCards.map(card => card) }
        </div>

      </div>
    )
  }
}

const Token = ({ row, column, color }) => {
    return <div id={`${row}-${column}`} className="token" style={{backgroundColor: `${color}`}}></div>  
}

const TokenButton = ({ number }) => {
    return (
      <div className="token-button">
        <div className="button-number">{ number }</div>
      </div>
    )
}

const LeftCard = ({ info, number }) => {
    return (
      <div className="quiz-card">
        <div class="left number">{ number + 1 }</div>
        <div class="center">{ info.side_a }</div>
      </div>
    )
}

const RightCard = ({ info, handleClick }) => {
    return (
      <div className="quiz-card" onClick={handleClick}>
        <div class="center">
            { info.side_b }
        </div>
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
  
export default connect(mapStateToProps, { fetchCards })(WholeGame)
// export default WholeGame
