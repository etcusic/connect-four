import React, { Component } from 'react'
import Cell from '../components/Cell'
import ButtonCell from '../components/ButtonCell'

export class GameBoard extends Component {

    generateCells = () => {
        let cells = []
        for (let i = 1; i <= 7; i++){
            let column = "col-" + i.toString()
            cells.push(
                <td className={column}>
                    {console.log(i)}
                    <Cell />
                </td>
            )
        }
        return cells.map(cell => cell)
    }

    generateRows = () => {
        let rows = []
        for (let i = 1; i <= 6; i++){
            rows.push(
                <tr className="row">
                    {console.log(i)}
                    { this.generateCells() }
                </tr>
            )
        }
        return rows.map(row => row)
    }

    render() {
        return (
            <div>
                <table id="game-board-table">
                    <tbody>
                        { this.generateRows() }
                        <tr id="button-row">
                            <td id="token-button-1"><ButtonCell /></td>
                            <td id="token-button-2"><ButtonCell /></td>
                            <td id="token-button-3"><ButtonCell /></td>
                            <td id="token-button-4"><ButtonCell /></td>
                            <td id="token-button-5"><ButtonCell /></td>
                            <td id="token-button-6"><ButtonCell /></td>
                            <td id="token-button-7"><ButtonCell /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }

}

export default GameBoard