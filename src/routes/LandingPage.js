import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchMuppets } from '../actions/index'
import { fetchCards } from '../actions/index'
import { fetchGameLogs } from '../actions/index'
import { initializeSession } from '../actions/index'
import { MuppetsList } from '../containers/MuppetsList.js'
import { Beaker } from '../containers/Beaker.js'

export class LandingPage extends Component {

  constructor () {
    super()
    this.state = {
      view: <Beaker showMuppetsList={ this.showMuppetsList } />
    }
  }

  componentDidMount(){
    this.props.fetchMuppets()
    this.props.fetchCards()
    this.props.fetchGameLogs()
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

export default connect(mapStateToProps, { fetchMuppets, fetchCards, fetchGameLogs, initializeSession })(LandingPage)