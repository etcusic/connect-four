import React from 'react'

const ConnectFourLogs = ({ logs }) => {
    return (
        <table>
            <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Deck</th>
                <th>Time</th>
                <th>Outcome</th>
            </tr>
            </thead>

        <tbody id="high-scores-table">             
            { logs.map( log => {
                <tr>
                    <td>log.id</td>
                    <td>log.user</td>
                    <td>log.deck</td>
                    <td>log.time</td>
                    <td>log.outcome</td>
                </tr>
            })}
        </tbody>
      </table>
    )
//   }
}

export default ConnectFourLogs