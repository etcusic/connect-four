import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchMuppets } from '../actions/index'
import { fetchDecks } from '../actions/index'
import { fetchCards } from '../actions/index'
import { fetchGameLogs } from '../actions/index'
import { fetchConnectFourLogs } from '../actions/index'
import { initializeSession } from '../actions/index'
import { MuppetsList } from './MuppetsList.js'
import { Beaker } from './Beaker.js'

export class LandingPage extends Component {

  constructor () {
    super()
    this.state = {
      view: <Beaker showMuppetsList={ this.showMuppetsList } />
    }
  }

  componentDidMount(){
    this.props.fetchMuppets()
    this.props.fetchDecks()
    this.props.fetchCards(1)
    this.props.fetchGameLogs()
    this.props.fetchConnectFourLogs()
  }

  showMuppetsList = () => {
    this.setState({
      view: <MuppetsList muppets={ this.props.apiInfo.muppets} initializeSession={this.props.initializeSession} />
    })
  }
  
  render() {
    return (
      <div>
        { this.state.view }
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

export default connect(mapStateToProps, { fetchMuppets, fetchDecks, fetchCards, fetchGameLogs, fetchConnectFourLogs, initializeSession })(LandingPage)