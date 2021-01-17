import React, { Component } from 'react'
import ConnectFourLogs from '../components/ConnectFourLogs'

export class GameLogsTable extends Component {

    render() {
        return (
        <div>
            <h2 class="center">Connect 4 Game Logs</h2>
            <div id="game-logs-panel" class="container">
                <ConnectFourLogs logs={ this.props.logs } />
            </div>
        </div>
        )
    }
}

export default GameLogsTable