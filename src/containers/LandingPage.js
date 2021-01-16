import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchMuppets } from '../actions/index'

export class LandingPage extends Component {

  componentDidMount(){
    this.props.fetchMuppets(this.props)
  }

  // loadList = () => {
  //   this.props.listInfo.map(muppet => {
  //     <Muppet info={muppet} />
  //   })
  // }

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
          LIST:
          {/* { this.props.loadList } */}
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
    // listInfo: state.muppets.listInfo
    // practice: state.game.practice
  }
}

export default connect(mapStateToProps, { fetchMuppets })(LandingPage)