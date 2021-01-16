import React, { Component } from 'react'
import MuppetLi from '../components/MuppetLi'

export class MuppetsList extends Component {

    generateLis = () => {
        console.log(this.props)
        if (this.props.muppets){
            const list = this.props.muppets.map(muppet => <MuppetLi info={ muppet } />)
            return list.map(muppet => muppet)
        }
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