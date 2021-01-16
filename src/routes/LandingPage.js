import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchMuppets } from '../actions/index'
import { fetchCards } from '../actions/index'
import { fetchGameLogs } from '../actions/index'

export class LandingPage extends Component {

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

  handleClick = () => {
    console.log(this.props)
  } 
  
  render() {
    return (
      <div>
        Landing Page Component
        <div className="trial-buttons">
            <GetMuppetsButton handleClick={ this.handleClick } />
            <GetCardsButton handleClick={ this.handleClick } />
            <GetGameLogsButton handleClick={ this.handleClick } />
            <SendGameLogButton handleClick={ this.handleClick } />
        </div>
        <ul>
          MUPPET LIST:
          { this.loadMuppets() }
        </ul>
        <ul>
          CARD LIST:
          { this.loadCards() }
        </ul>
        <ul>
          GAME LOGS LIST:
          { this.loadGameLogs() }
        </ul>
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

const GetMuppetsButton = ({ handleClick }) => {
  return (
    <div>
      <button onClick={ handleClick }>GetMuppetsButton</button>
    </div>
  )
}

const GetCardsButton = ({ handleClick }) => {
  return (
    <div>
        <button onClick={ handleClick }>GetCardsButton</button>
    </div>
)
}

const GetGameLogsButton = ({ handleClick }) => {
  return (
    <div>
        <button onClick={ handleClick }>GetGameLogsButton</button>
    </div>
  )
}

const SendGameLogButton = ({ handleClick }) => {
  return (
    <div>
      <button onClick={ handleClick }>SendGameLogButton</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    apiInfo: state.apiInfo
  }
}

export default connect(mapStateToProps, { fetchMuppets, fetchCards, fetchGameLogs })(LandingPage)