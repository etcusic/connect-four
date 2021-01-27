import React, { Component } from 'react'
import { connect } from 'react-redux'
import SidePanel from '../containers/SidePanel'
import MainSection from '../containers/MainSection'
import { fetchDecks } from '../actions/index'
import { fetchConnectFourLogs } from '../actions/index'

export class HomePage extends Component {

  componentDidMount(){
    console.log("home page did mount - fetchDecks")
    // this will run every time home page is accessed - better place to put it?
    this.props.fetchDecks()
  }
  
  render() {
    return (
      <div class="row">
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