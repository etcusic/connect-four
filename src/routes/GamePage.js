import React, { Component } from 'react'
import { connect } from 'react-redux'

export class GamePage extends Component {

    constructor(){
        super()
        state = {
            view: <DeckSelector changeView={ this.changeView }/>
        }
    }

    changeView = () => {
        console.log("changed view, yay!")

    }

    render(){
        return (
            <div>
                { this.state.view }
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
      decks: state.decks
    }
}

export default connect(mapStateToProps)(GamePage)