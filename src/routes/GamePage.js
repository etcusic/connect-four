import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sendConnectFourLog } from '../actions/index'
import PlaceHolder from '../components/PlaceHolder'
import DeckSelector from '../components/DeckSelector'
import WholeGame from '../containers/WholeGame'
import GameOver from '../containers/GameOver'

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
        const log = {...stateObject, user_id: this.props.userId} 
        console.log("A")
        this.props.sendConnectFourLog(log)
        console.log("B")
        this.setState({ view: <GameOver /> })
    }

    changeView = (deck) => {
        fetch(`http://localhost:3001/decks/${deck.id}/cards`)
        .then(resp =>  resp.json())
        .then(cards => {
            this.setState({
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
        userId: state.user.id,
        decks: state.decks
    }
}
  
export default connect(mapStateToProps, { sendConnectFourLog })(GamePage)