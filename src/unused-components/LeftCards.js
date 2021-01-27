import React, { Component } from 'react'
import Card from '../components/Card'

class LeftCards extends Component {

    generateCards = () => {
        this.props.cards.map(card => {
            return <Card info={card} />
        })
    }

    render() {
        return (
            <div id="left-cards">
                <ul>
                    { this.generateCards() }
                </ul>
            </div>
        )
    }

}
  
export default LeftCards