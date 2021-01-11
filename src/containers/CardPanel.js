import React, { Component } from 'react'
import Card from '../components/Card'

export class CardPanel extends Component {

    generateCards = () => {
        // take in an array of 7 cards as argument and render each to the panel vertically
        let practice = [<Card />, <Card />, <Card />, <Card />, <Card />, <Card />, <Card />]
        return practice.map(card => card)
    }

    render() {
        return (
        <div id="card-panel">
            {this.generateCards()}
        </div>
        )
    }
}

export default CardPanel