import React, { Component } from 'react'
import Cell from '../components/Cell'
import ButtonCell from '../components/ButtonCell'

export class GameBoard extends Component {
    
    generateCells = (rowIndex) => {
        let cells = []
        for (let i = 0; i < 7; i++){
            cells.push(
                <td className={`col-${i}`}>
                    <Cell token={this.props.tokens[rowIndex][i]}/>
                </td>
            )
        }
        return cells.map(cell => cell)
    }

    generateRows = () => {
        let rows = []
        for (let i = 0; i < 6; i++){
            rows.push(
                <tr className="row">
                    { this.generateCells(i) }
                </tr>
            )
        }
        return rows.map(row => row)
    }

    generateButtons = () => {
        let buttons = []
        for (let i = 1; i <= 7; i++){
            let id = `token-button-${i}`
            buttons.push(
                <td>
                    <ButtonCell number={i}/>
                </td>
            )
        }
        return (
            <tr id="button-row">
                { buttons.map(button => button) }
            </tr>
        )
    }

    render() {
        return (
            <div id="game-board">
                <table id="game-board-table">
                    <tbody>
                        { this.generateRows() }
                        { this.generateButtons() }
                    </tbody>
                </table>
            </div>
        )
    }

}

export default GameBoard