import React, { Component } from 'react'
import Card from '../components/Card'

export class CardPanel extends Component {

    generateCards = () => {
        // take in an array of 7 cards as argument and render each to the panel vertically
        let practice = []
        for (let i = 1; i < 8; i++){
            practice.push(<Card card={"This is a card, yo"} />)
        }
        return practice.map(card => card)
    }

    render() {
        return (
        <div id="card-panel">
            <div id="cards-container">
                {this.generateCards()}
            </div>
        </div>
        )
    }
}

export default CardPanel