import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchMuppets } from '../actions/index'
import { fetchCards } from '../actions/index'
import { fetchGameLogs } from '../actions/index'
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

  loadMuppets = () => {
    return this.props.apiInfo.muppets ? this.props.apiInfo.muppets.map(info => <Muppet info={ info } />) : (<li>No info yet </li>)
  }

  loadCards = () => {
    return this.props.apiInfo.cards ? this.props.apiInfo.cards.map(info => <Card info={ info } />) : (<li>No info yet </li>)
  }

  loadGameLogs = () => {
    return this.props.apiInfo.gameLogs ? this.props.apiInfo.gameLogs.map(info => <GameLog info={ info } />) : (<li>No info yet </li>)
  }

  showMuppetsList = () => {
    this.setState({
      view: <MuppetsList muppets={ this.props.apiInfo.muppets }/>
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

const Muppet = ({ info }) => {
  return <li>{ info.name } </li>
}

const Card = ({ info }) => {
  return <li>{ info.side_a } - { info.side_b }</li>
}

const GameLog = ({ info }) => {
  return <li>{ info.user }</li>
}

const mapStateToProps = state => {
  return {
    apiInfo: state.apiInfo
  }
}

export default connect(mapStateToProps, { fetchMuppets, fetchCards, fetchGameLogs })(LandingPage)