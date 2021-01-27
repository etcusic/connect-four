import React, { Component } from 'react'
import MuppetLi from './MuppetLi'

export class MuppetsList extends Component {

    generateLis = () => {
        console.log(this.props)
        if (this.props.muppets){
            const list = this.props.muppets.map(muppet => <MuppetLi info={ muppet } initializeSession={() => this.props.initializeSession(muppet) } />)
            return list.map(muppet => muppet)
        }
    }

    render(){
        return (
        <div>
            <h3 class="center">SELECT YOUR MUPPET AVATAR</h3>
            <div id="muppets-list" class="collection">
                { this.generateLis() }
            </div>
        </div>
        )
    }
    
}

export default (MuppetsList)