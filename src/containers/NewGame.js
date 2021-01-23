import React, { Component } from 'react'
import { connect } from 'react-redux'

export class NewGame extends Component {

    constructor(){
        super()
        // initialize tokens here
        this.state = {
            tokens: [],
            cards: [],
            turn: 0,
            over: false,
            header: "GAME READY!"
        }
    }

    componentDidMount(){
        // shuffle cards
        this.setState({
            tokens: [],
            cards: this.props.cards,
            turn: 0,
            over: false,
            header: "GAME READY!"
        })
    }

    render(){
        return (
            <div>
                <div>{console.log(this.state.cards)}</div>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
      cards: state.currentDeckOfCards
    }
}

export default connect(mapStateToProps)(NewGame)
