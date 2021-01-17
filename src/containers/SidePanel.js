import React, { Component } from 'react'
import ProfilePic from '../components/ProfilePic'
import DeckSelector from '../components/DeckSelector'
import GameSelector from '../components/GameSelector'
import GoToGameButton from '../components/GoToGameButton'

export class SidePanel extends Component {
  
  render() {
    return (
      <div id="side-panel">
        SIDE PANEL
        <ProfilePic />
        <DeckSelector />
        <GameSelector />
        <GoToGameButton />
      </div>
    )
  }
}

export default SidePanel