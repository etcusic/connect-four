import React, { Component } from 'react'
import { connect } from 'react-redux'
import { GameLogsTable } from '../containers/GameLogsTable'
import { fetchConnectFourLogs } from '../actions/index'

export class Scores extends Component {

  componentDidMount(){
    this.props.fetchConnectFourLogs(this.props.userID)
  }

  render() {
    return (
      <div>
        <GameLogsTable logs={this.props.gameLogs} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    userID: state.user.id,
    gameLogs: state.gameLogs
  }
}

export default connect(mapStateToProps, { fetchConnectFourLogs })(Scores)