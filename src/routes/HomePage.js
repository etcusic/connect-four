import React, { Component } from 'react'
import { connect } from 'react-redux'
import SidePanel from '../containers/SidePanel'
import MainSection from '../containers/MainSection'
import { fetchDecks } from '../actions/index'
import { fetchConnectFourLogs } from '../actions/index'

export class HomePage extends Component {

  // currently don't need this, but it may come in handy later
  componentDidMount(){
    this.props.fetchDecks()
    // this.props.fetchConnectFourLogs()
  }
  
  render() {
    return (
      <div class="row">
      { console.log(this.props) }
        <SidePanel user={ this.props.user } decks={ this.props.decks } />
        <MainSection />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    decks: state.decks
  }
}

export default connect(mapStateToProps, { fetchDecks, fetchConnectFourLogs })(HomePage)