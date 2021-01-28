import React, { Component } from 'react'
import { connect } from 'react-redux'
import PlaceHolder from '../components/PlaceHolder'
import DeckSelector from '../components/DeckSelector'
import WholeGame from '../containers/WholeGame'

export class GamePage extends Component {

    constructor(){
        super()
        this.state = {
            view: <PlaceHolder />
        }
    }

    componentDidMount(){
        this.setState({
            view: <DeckSelector decks={ this.props.decks } changeView={ this.changeView }/>
        })
    }

    endGame = (stateObject) => {
        const log = {...stateObject} // need to add user id and deck id - use redux for user id; GamePage state for deck id
        console.log(stateObject) // call fetch request to send game log from actions folder
        this.setState({ view: <PlaceHolder /> })
    }

    changeView = (deck) => {
        fetch(`http://localhost:3001/decks/${deck.id}/cards`)
        .then(resp =>  resp.json())
        .then(cards => {
            this.setState({
                // view: <NewGame />
                view: <WholeGame deck={deck} cards={cards} endGame={this.endGame} />
            })
        })
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