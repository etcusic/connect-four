import React, { Component } from 'react'
import MuppetLi from '../components/MuppetLi'

export class MuppetsList extends Component {

    initializeSession = (id) => {
        console.log("initialize session")
        console.log(id)
    }

    generateLis = () => {
        console.log(this.props)
        if (this.props.muppets){
            const list = this.props.muppets.map(muppet => <MuppetLi info={ muppet } initializeSession={() => this.initializeSession(muppet.id) } />)
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

export default MuppetsList