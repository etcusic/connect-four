import React, { Component } from 'react'

export class GameHeader extends Component {

    state = {
        time: 0
    }

    componentDidMount() {
        this.interval = setInterval(this.clockTick, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    clockTick = () => {
        this.setState(prevState => ({
            time: prevState.time + 1
        }))
    }

    render(){
        return (
            <div>
                <div id="timer" className="right">
                    Timer:
                    <div id="timer-number">{this.state.time}</div>
                </div>
                <div id="header">{ this.props.header }</div>
            </div>
        )
    }
    
}

export default GameHeader