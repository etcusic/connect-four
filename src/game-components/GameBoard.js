import React, { Component } from 'react-redux'
import TokenButton from '../game-components/Token'

export class GameBoard extends Component {
    
    createButtons = () => {
        let buttons = []
        for (let i = 0; i < 7; i++){
            buttons.push(<TokenButton number={i + 1} />)
        }
        return buttons.map(map => map)
      }

    generateRow = (tokenArray) => {
        let cells = tokenArray.map(token => <td className="cell">{ token }</td>)
        return cells.map(cell => cell)
    }
    
    render () {
        return (

            <div class="col s8">
                <h2 class="center">{this.state.header}</h2>
                <div id="game-board" class="col s12">
                    <table id="game-board-table" class="center">
                        <tbody>
                            <tr className="token-row">{ this.generateRow(this.props.tokens[5]) }</tr>
                            <tr className="token-row">{ this.generateRow(this.props.tokens[4]) }</tr>
                            <tr className="token-row">{ this.generateRow(this.props.tokens[3]) }</tr>
                            <tr className="token-row">{ this.generateRow(this.props.tokens[2]) }</tr>
                            <tr className="token-row">{ this.generateRow(this.props.tokens[1]) }</tr>
                            <tr className="token-row">{ this.generateRow(this.props.tokens[0]) }</tr>
                            <tr id="button-row">{ this.generateRow(this.createButtons()) }</tr>
                        </tbody>
                    </table>
                </div>
            </div>
    
        )
    }
}