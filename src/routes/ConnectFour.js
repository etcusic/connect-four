import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCards } from '../actions/index'
import GameBoard from '../game-components/GameBoard'
import Token from '../game-components/Token'
import LeftCard from '../game-components/LeftCard'
import RightCard from '../game-components/RightCard'

class ConnectFour extends Component {
    
    constructor() {
        super()
        this.state = {
            tokens: this.initializeTokens(),
            cards: [],
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

    shuffle (arrayOfCards) {
        return arrayOfCards.sort(() => Math.random() - 0.5)
    }

    generateLeftCards(arr){
        return arr.map((card, index) => <LeftCard info={card} number={index} />)
    }

    generateRightCards(arr){
        let rightCards = arr.map((card, index) => <RightCard info={card} handleClick={() => this.handleClick(index)} />)
        let shuffled = this.shuffle(rightCards)
        return shuffled
    }

    tryAgain(){
        console.log(this.state)
        this.setState({
            cards: this.state.cards,
            leftCards: this.state.leftCards,
            rightCards: this.state.rightCards,
            tokens: this.state.tokens,
            turn: this.state.turn,
            over: false,
            header: "INVALID MOVE, TRY AGAIN!!"
        })
    }

    shuffleAndDeal(){
        let shuffled = this.shuffle(this.state.cards)
        this.setState({
            tokens: this.state.tokens,
            cards: shuffled,
            leftCards: this.generateLeftCards(shuffled.slice(0,7)),
            rightCards: this.generateRightCards(shuffled.slice(0,7)),
            turn: this.state.turn,
            over: false,
            header: "YOUR TURN"
        })       
    }

    makeMove = (matrix, rowNum, colNum) => {
        matrix[rowNum][colNum] = <Token row={rowNum} column={colNum} color={ "blue" } />  
        this.setState({
            cards: this.state.cards,
            leftCards: this.state.leftCards,
            rightCards: this.state.rightCards,
            tokens: matrix,
            turn: this.state.turn += 1,
            over: false,
            header: this.state.header
        })
    }

    handleClick = (index) => {
        let matrix = this.state.tokens
        let column = matrix.map(row => row[index])
        let rowNum = column.findIndex(token => token.props.color === "whitesmoke")
        if (rowNum === -1){
            this.tryAgain()
        } else {
            this.makeMove(matrix, rowNum, index)
            this.checkWinner({row: rowNum, col: index})
            this.removeCardAndDeal({row: rowNum, col: index})
            // new Promise(() => this.makeMove(matrix, rowNum, index))
            //     .then(this.checkWinner({row: rowNum, col: index}))
            //     .then(this.removeCardAndDeal({row: rowNum, col: index}))
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
                this.endGame()
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

    removeCardAndDeal(index){
        let arr = this.state.cards
        arr.splice(index.col, 1)
        this.shuffleAndDeal(arr)
    }

    endGame(){
        // cannot get set state to work here and it is super frustrating
        document.getElementById('button-row').remove()  
        document.querySelectorAll('.quiz-card').forEach(element => element.remove())
        document.getElementById('game-header').innerHTML = "GAME OVER"
    }

    render() {
        return (
            <div class="row">
            
                <div class="col s2">
                    { this.state.leftCards.map(card => card) }
                </div>

                <div class="col s8">
                    <GameBoard tokens={ this.state.tokens } header={ this.state.header } />
                </div>

                <div class="col s2">
                    { this.state.rightCards.map(card => card) }
                </div>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      apiInfo: state.apiInfo,
      session: state.session,
      game: state.game
    }
}
  
export default connect(mapStateToProps, { fetchCards })(ConnectFour)