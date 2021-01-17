import React, { Component } from 'react'
import ProfilePic from '../components/ProfilePic'
import DeckSelector from '../components/DeckSelector'
import GameSelector from '../components/GameSelector'
import GoToGameButton from '../components/GoToGameButton'

export class SidePanel extends Component {

    example = () => {
        return [
            {name: "example"},
            {name: "example"},
            {name: "example"},
            {name: "example"}
        ]
    }
  
  render() {
    return (
      <div id="side-panel" class="col s2 dark-green">
        <ProfilePic />
        <DeckSelector decks={ this.example() } />
        <GameSelector games={ this.example() } />
        <GoToGameButton />
      </div>
    )
  }
}

export default SidePanel