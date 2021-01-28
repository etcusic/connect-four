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

    changeView = (deckId) => {
        fetch(`http://localhost:3001/decks/${deckId}/cards`)
        .then(resp =>  resp.json())
        .then(cards => {
            this.setState({
                // view: <NewGame />
                view: <WholeGame cards={cards} />
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