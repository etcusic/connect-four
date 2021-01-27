import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCards } from '../actions/index'
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
        console.log("changed view, yay!")
        this.props.fetchCards(deckId)
        this.setState({
            // view: <NewGame />
            view: <WholeGame />
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

export default connect(mapStateToProps, { fetchCards })(GamePage)