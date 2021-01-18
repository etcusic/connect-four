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

    shuffleAndDeal(arr){
        let shuffled = this.shuffle(arr)
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
        this.executeMove(matrix)
        this.checkWinner({row: rowNum, col: colNum})
    }

    handleClick = (index) => {
        let matrix = this.state.tokens
        let column = matrix.map(row => row[index])
        let rowNum = column.findIndex(token => token.props.color === "whitesmoke")
        if (rowNum === -1){
            this.tryAgain()
        } else {
            this.makeMove(matrix, rowNum, index)
        }
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