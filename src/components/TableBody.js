import React from 'react'
import NumbersColumn from './NumbersColumn'

const ConnectFourLogs = ({ tokens }) => {

  function generateRow(tokenArray) {
    let cells = tokenArray.map((token, i) => <td className="cell" key={i.toString()}>{ token }</td>)
    return cells.map(cell => cell)
  }

    return (
        <table id="game-board-table" className="center">
            <tbody>
                <tr className="token-row">{ generateRow(tokens[5]) }</tr>
                <tr className="token-row">{ generateRow(tokens[4]) }</tr>
                <tr className="token-row">{ generateRow(tokens[3]) }</tr>
                <tr className="token-row">{ generateRow(tokens[2]) }</tr>
                <tr className="token-row">{ generateRow(tokens[1]) }</tr>
                <tr className="token-row">{ generateRow(tokens[0]) }</tr>
                <NumbersColumn />
            </tbody>
        </table>
        
    )
//   }
}

export default ConnectFourLogs