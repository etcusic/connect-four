import React, { Component } from 'react'
import { connect } from 'react-redux'

export class NewGame extends Component {

    constructor(){
        super()
        console.log(this.props)
        // initialize tokens here
        this.state = {
            tokens: [],
            cards: [],
            turn: 0,
            over: false,
            header: "GAME READY!"
        }
    }

    componentDidMount(){
        // shuffle cards
        this.setState({
            tokens: [],
            cards: this.props.cards,
            turn: 0,
            over: false,
            header: "GAME READY!"
        })
    }

    render() {
        return (
          <div class="row">
            
            <section class="col s2">
                {/* <LeftCards cards={ this.state.leftCards } /> */}
            </section>
    
            <section class="col s8">
                <div id="game-header">
                <h1>Changed the view, yo!</h1>
                    {/* <GameHeader header={ this.state.header } /> */}
                </div>
                
                <div id="game-board" class="col s12">
                    {/* <GameBoard tokens={ this.state.tokens } /> */}
                </div>
            </section>
    
            <section class="col s2">
            {/* <RightCards cards={ this.state.rightCards } /> */}
            </section>
    
          </div>
        )
      }

}

const mapStateToProps = state => {
    return {
      cards: state.currentDeckOfCards
    }
}

export default connect(mapStateToProps)(NewGame)
