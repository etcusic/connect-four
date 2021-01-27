import React, { Component } from 'react'
import { connect } from 'react-redux'
import SidePanel from '../containers/SidePanel'
import MainSection from '../containers/MainSection'
import { fetchDecks } from '../actions/index'
import { fetchConnectFourLogs } from '../actions/index'

export class HomePage extends Component {

  componentDidMount(){
    if (this.props.decks.length === 0){
      this.props.fetchDecks()
    }
  }
  
  render() {
    return (
      <div className="row">
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