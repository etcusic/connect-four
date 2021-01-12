import React, { Component } from 'react'
import Cell from '../components/Cell'
import ButtonCell from '../components/ButtonCell'
import Token from '../components/Token'

export class GameBoard extends Component {

    constructor() {
        super()
        this.state = {
          // is there a better way to do this???
          tokensArray: [
            [<Token />, <Token />, <Token />, <Token />, <Token />, <Token />, <Token />],
            [<Token />, <Token />, <Token />, <Token />, <Token />, <Token />, <Token />],
            [<Token />, <Token />, <Token />, <Token />, <Token />, <Token />, <Token />],
            [<Token />, <Token />, <Token />, <Token />, <Token />, <Token />, <Token />],
            [<Token />, <Token />, <Token />, <Token />, <Token />, <Token />, <Token />],
            [<Token />, <Token />, <Token />, <Token />, <Token />, <Token />, <Token />]
          ]
        }
      }
    
    generateCells = () => {
        let cells = []
        for (let i = 1; i <= 7; i++){
            let column = `col-${i}`
            cells.push(
                <td className={column}>
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
                    { this.generateCells() }
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