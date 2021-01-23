import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCards } from '../actions/index'
import PlaceHolder from '../components/PlaceHolder'
import DeckSelector from '../components/DeckSelector'
import NewGame from '../containers/NewGame'

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

    changeView = (index) => {
        console.log("changed view, yay!")
        this.props.fetchCards(index)
        this.setState({
            view: <NewGame />
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