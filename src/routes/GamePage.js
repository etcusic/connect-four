import React, { Component } from 'react'
import { connect } from 'react-redux'
import PlaceHolder from '../components/PlaceHolder'
import DeckSelector from '../components/DeckSelector'

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

    changeView = () => {
        console.log("changed view, yay!")
        this.setState({
            view: <PlaceHolder />
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