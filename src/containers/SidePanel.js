import React, { Component } from 'react'
import ProfilePic from '../components/ProfilePic'

export class SidePanel extends Component {
  
  render() {
    return (
      <aside id="side-panel" className="col s2 dark-green">
        <h2 className="center white-text">{ this.props.user.name }</h2>
        <ProfilePic image={ this.props.user.image } />
        <div className="white-text">
          This is here until I add a user sign in feature to the application.
        </div>
      </aside>
    )
  }
}

export default SidePanel