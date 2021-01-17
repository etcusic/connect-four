import React, { Component } from 'react'
import ConnectFourLogs from '../components/ConnectFourLogs'

export class GameLogsTable extends Component {

    render() {
        return (
        <div id="game-logs-panel">
            <ConnectFourLogs logs={ this.props.logs } />
        </div>
        )
    }
}

export default GameLogsTable