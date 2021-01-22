import React, { Component } from 'react'
import { connect } from 'react-redux'
import SidePanel from '../containers/SidePanel'
import MainContainer from '../containers/MainContainer'
// import { fetchUser } from '../actions/index'
// import { fetchCards } from '../actions/index'
// import { initializeGame } from '../actions/index'

export class HomePage extends Component {
  
  render() {
    return (
      <div class="row">
      { console.log(this.props) }
        <SidePanel user={ this.props.user } />
        <MainContainer />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    deck: state.deck,
    gameLogs: state.gameLogs,
    game: state.game
  }
}

export default connect(mapStateToProps)(HomePage)