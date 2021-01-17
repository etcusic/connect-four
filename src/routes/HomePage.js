import React, { Component } from 'react'
import SidePanel from '../containers/SidePanel'
import MainContainer from '../containers/MainContainer'
import { connect } from 'react-redux'
import { fetchCards } from '../actions/index'
import { initializeGame } from '../actions/index'

export class HomePage extends Component {
  
  render() {
    return (
      <div class="row">
      { console.log(this.props) }
        <SidePanel 
          session={ this.props.session } 
          decks={this.props.apiInfo.decks} 
          cards={this.props.apiInfo.cards} 
          fetchCards={ this.props.fetchCards } 
          initializeGame={ this.props.initializeGame }  
        />
        <MainContainer />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    apiInfo: state.apiInfo,
    session: state.session,
    game: state.game
  }
}

export default connect(mapStateToProps, { fetchCards, initializeGame })(HomePage)