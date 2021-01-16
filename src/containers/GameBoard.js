import React, { Component } from 'react'

class GameBoard extends Component {

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
                        <tr id="button-row">{ this.generateRow(this.props.buttons) }</tr>
                    </tbody>
                </table>
            </div>
        )
    }

}
  
export default GameBoard