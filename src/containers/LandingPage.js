import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchMuppets } from '../actions/index'

export class LandingPage extends Component {

  loadList = () => {
    this.props.muppets.map(muppet => {
      <Muppet info={muppet} />
    })
  }

  render() {
    return (
      <div>
        Landing Page Component
        <div className="trial-buttons">
            <GetMuppetsButton />
            <GetCardsButton />
            <GetGameLogsButton />
            <SendGameLogButton />
        </div>
        <ul>
          LIST:
        </ul>
      </div>
    )
  }
}

const Muppet = ({ info }) => {
  return (
    <li>
      { info.name }
    </li>
  )
}

const GetMuppetsButton = () => {
  return (
    <div>
      <button>GetMuppetsButton</button>
    </div>
  )
}

const GetCardsButton = () => {
  return (
    <div>
        <button>GetCardsButton</button>
    </div>
)
}

const GetGameLogsButton = () => {
  return (
    <div>
        <button>GetGameLogsButton</button>
    </div>
  )
}

const SendGameLogButton = () => {
  return (
    <div>
      <button>SendGameLogButton</button>
    </div>
  )
}

export default LandingPage