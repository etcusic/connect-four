import React, { Component } from 'react'
import { connect } from 'react-redux'

export class NewGame extends Component {

    componentDidMount(){
        // initialize game here
        let cards = this.shuffle(this.props.cards)
        // shuffle cards
        console.log(this.props)
        this.setState({
            tokens: [],
            cards: this.props.cards,
            turn: 0,
            over: false,
            header: "GAME READY!"
        })
    }
 
    shuffle (arrayOfCards) {
        return arrayOfCards.sort(() => Math.random() - 0.5)
    }
    
    render() {
        return (
         
          <div class="row">
            {  console.log(this.state)} 
            <section class="col s2">
                {/* <LeftCards cards={ this.state.leftCards } /> */}
            </section>
    
            <section class="col s8">
                <div id="game-header">
                    <h1 class="center">Changed the view, yo!</h1>
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
