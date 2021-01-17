import React from 'react'

const ConnectFourLogs = ({ logs }) => {
    
    const tableCells = logs.map( log => {
        return (
            <tr>
                <td>{log.user}</td>
                <td>{log.deck}</td>
                <td>{log.time} seconds</td>
                <td>{log.outcome}</td>
            </tr>
        )
    })

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>NAME:</th>
                        <th>CARD SET:</th>
                        <th>TIME:</th>
                        <th>OUTCOME:</th>
                    </tr>
                </thead>

                <tbody id="high-scores-table">      
                    { tableCells.map(cell => cell)}
                </tbody>
            </table>
        </div>
    )
//   }
}

export default ConnectFourLogs