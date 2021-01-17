import React, { Component } from 'react'
import ProfilePic from '../components/ProfilePic'
import DeckSelector from '../components/DeckSelector'
import GameSelector from '../components/GameSelector'
import GoToGameButton from '../components/GoToGameButton'

export class SidePanel extends Component {

    example = () => {
        return [
            {name: "Connect 4"},
            {name: "Speed Match"},
            {name: "Tic Tac Toe"}
        ]
    }
  
  render() {
    return (
      <div id="side-panel" class="col s2 dark-green">
      { console.log(this.props) }
        <ProfilePic image={ this.props.session.image } />
        <DeckSelector decks={ this.props.decks } fetchCards={this.props.fetchCards} />
        <GameSelector games={ this.example() } />
        <GoToGameButton />
      </div>
    )
  }
}

export default SidePanel