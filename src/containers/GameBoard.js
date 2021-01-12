import React, { Component } from 'react'
import TokenButton from '../components/TokenButton'

export class GameBoard extends Component {

    buttonsArray = [
        <TokenButton number={1}/>,
        <TokenButton number={2}/>,
        <TokenButton number={3}/>,
        <TokenButton number={4}/>,
        <TokenButton number={5}/>,
        <TokenButton number={6}/>,
        <TokenButton number={7}/>
    ]

    generateRow = (tokenArray) => {
        let cells = tokenArray.map(token => <td className="cell">{ token }</td>)
        return cells.map(cell => cell)
    }

    render() {
        return (
            <div id="game-board">
                <table id="game-board-table">
                    <tbody>
                        <tr className="row">{ this.generateRow(this.props.tokens[5]) }</tr>
                        <tr className="row">{ this.generateRow(this.props.tokens[4]) }</tr>
                        <tr className="row">{ this.generateRow(this.props.tokens[3]) }</tr>
                        <tr className="row">{ this.generateRow(this.props.tokens[2]) }</tr>
                        <tr className="row">{ this.generateRow(this.props.tokens[1]) }</tr>
                        <tr className="row">{ this.generateRow(this.props.tokens[0]) }</tr>
                        <tr id="button-row">{ this.generateRow(this.buttonsArray) }</tr>
                    </tbody>
                </table>
            </div>
        )
    }

}

export default GameBoard