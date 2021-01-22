import React, { Component } from 'react'
import ProfilePic from '../components/ProfilePic'
import DeckSelector from '../components/DeckSelector'
import GameSelector from '../components/GameSelector'

export class SidePanel extends Component {

  componentDidMount(){

  }

    example = () => {
        return [
            {name: "Connect 4"},
            {name: "Speed Match"},
            {name: "Tic Tac Toe"}
        ]
    }
  
  render() {
    return (
      <aside id="side-panel" class="col s2 dark-green">
        { console.log(this.props) }
        <ProfilePic image={ this.props.user.image } />
        <DeckSelector decks={ this.props.decks }/>
        {/* <DeckSelector decks={ this.props.decks } fetchCards={this.props.fetchCards} /> */}
        {/* <GameSelector games={ this.example() } /> */}
        <div class="white-text">
          This is currently in place until I apply a user sign in feature to the application.
        </div>
      </aside>
    )
  }
}

export default SidePanel