import React, { Component } from 'react'

export class LandingPage extends Component {
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
      </div>
    )
  }
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