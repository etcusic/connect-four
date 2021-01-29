import React from 'react'
import NumbersColumn from './NumbersColumn'

const ConnectFourLogs = () => {
    
    generateRow = () => {
        let cells = this.props.tokens.map((token, i) => <td className="cell" key={i.toString()}>{ token }</td>)
        return cells.map(cell => cell)
        }

    return (
        <tbody>
            { this.generateRow() }
            <NumbersColumn />
        </tbody>
    )
//   }
}

export default ConnectFourLogs