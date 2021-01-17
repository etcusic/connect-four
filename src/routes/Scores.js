import React, { Component } from 'react'
import { connect } from 'react-redux'
import GameLogsTable from '../containers/GameLogsTable'

export class Scores extends Component {
  render() {
    return (
      <div>
        <GameLogsTable logs={this.props.apiInfo.connectFourLogs} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    apiInfo: state.apiInfo,
    session: state.session
  }
}

export default connect(mapStateToProps)(Scores)