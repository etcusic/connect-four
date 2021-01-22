import React, { Component } from 'react'
import { connect } from 'react-redux'
import SidePanel from '../containers/SidePanel'
import MainContainer from '../containers/MainContainer'
import { fetchDecks } from '../actions/index'
// import { fetchUser } from '../actions/index'
// import { fetchCards } from '../actions/index'
// import { initializeGame } from '../actions/index'

export class HomePage extends Component {

  componentDidMount(){
    this.props.fetchDecks()
  }
  
  render() {
    return (
      <div class="row">
      { console.log(this.props) }
        <SidePanel user={ this.props.user } decks={ this.props.decks } />
        <MainContainer />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    decks: state.decks,
    gameLogs: state.gameLogs,
    game: state.game
  }
}

export default connect(mapStateToProps, { fetchDecks })(HomePage)