import React, { Component } from 'react'
import Card from '../components/Card'

export class CardPanel extends Component {

    // genRow = (vals) => {
    //     return vals.map(val => <Cell value={val} />) 
    // }
    
    // genMatrix = () => {
    //     return this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
    // } 
    
    // render() {
    //     return (
    //         <div id="matrix">
    //             {this.genMatrix()}
    //         </div>
    //     )
    // }

    generateCards = () => {
        // take in an array of 7 cards as argument and render each to the panel vertically
        let practice = [<Card />, <Card />, <Card />, <Card />, <Card />, <Card />, <Card />]
        return practice.map(card => card)
    }

    render() {
        return (
        <div id="card-panel">
            {/* <Card /> */}
            {this.generateCards()}
        </div>
        )
    }
}

export default CardPanel