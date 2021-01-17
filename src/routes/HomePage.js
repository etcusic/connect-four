import React, { Component } from 'react'
import SidePanel from '../containers/SidePanel'
import MainContainer from '../containers/MainContainer'
import { connect } from 'react-redux'

export class HomePage extends Component {
  
  render() {
    return (
      <div>
        <SidePanel />
        <MainContainer />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    apiInfo: state.apiInfo,
    session: state.session
  }
}

export default connect(mapStateToProps)(HomePage)