import React, { Component } from 'react'
import TokenButton from '../components/TokenButton'

export class GameBoard extends Component {

    handleClick = (index) => {
        let column = this.props.tokens.map(row => row[index])
        console.log(column)
        let nextToken = column.find(token => token.props.color === "whitesmoke")
        console.log(nextToken)
        // need to change token.props.color - how do I do this??
        // Change state.practice
    }

    createButtons = () => {
        let buttons = []
        for (let i = 0; i < 7; i++){
            buttons.push(<TokenButton number={i + 1} handleClick={() => this.handleClick(i)} />)
        }
        return buttons.map(map => map)
    }

    generateRow = (tokenArray) => {
        let cells = tokenArray.map(token => <td className="cell">{ token }</td>)
        return cells.map(cell => cell)
    }

    render() {
        return (
            <div id="game-board">
                <h1>{this.props.practice}</h1>
                <table id="game-board-table">
                    <tbody>
                        <tr className="row">{ this.generateRow(this.props.tokens[5]) }</tr>
                        <tr className="row">{ this.generateRow(this.props.tokens[4]) }</tr>
                        <tr className="row">{ this.generateRow(this.props.tokens[3]) }</tr>
                        <tr className="row">{ this.generateRow(this.props.tokens[2]) }</tr>
                        <tr className="row">{ this.generateRow(this.props.tokens[1]) }</tr>
                        <tr className="row">{ this.generateRow(this.props.tokens[0]) }</tr>
                        <tr id="button-row">{ this.generateRow(this.createButtons()) }</tr>
                    </tbody>
                </table>
            </div>
        )
    }

}

export default GameBoard