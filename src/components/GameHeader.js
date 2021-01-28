import React, { Component } from 'react'

export class GameHeader extends Component {

    constructor(){
        super()
        this.state = {
            time: 0
        }
    }
    
    componentDidMount(){
        this.countdown()
    }

    countdown = () => {
        return setInterval(() => this.setState({ time: (this.state.time + 1) }), 1000)
    }

    render(){
        return (
      <div>
        <div id="timer" class="right">
            Timer:
            <div>{this.state.time}</div>
        </div>
        <div id="header">{ this.props.header }</div>
      </div>
    )
    }
    
}

export default GameHeader