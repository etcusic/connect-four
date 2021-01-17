import React, { Component } from 'react'

class LeftCards extends Component {

    generateCards = () => {
        this.props.cards.map(card => {
            return <Card />
        })
    }

    render() {
        return (
            <div id="left-cards">
                <ul>

                </ul>
            </div>
        )
    }

}
  
export default LeftCards