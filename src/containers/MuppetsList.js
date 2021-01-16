import React, { Component } from 'react'

export class MuppetsList extends Component {

    generateLis = () => {
        console.log("yay!")
        // this.props.muppets.map(muppet => <Muppet info={ muppet } />)
    }

    render(){
        return (
            <div>
                { this.generateLis() }
            </div>
        )
    }
    
}

export default MuppetsList