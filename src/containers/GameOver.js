import React, { Component } from 'react'
import { connect } from 'react-redux'

export class GameOver extends Component {

    render(){
        return (
            <div className="row">
                <div className="col s4"></div>
                <div className="three-percent col s4 center">
                    <div id="game-over-card" className="card">
                        <div className="card-image">
                            <img className="responsive-img" src="https://pbs.twimg.com/profile_images/1080855598298611713/lTS-u1Iu_400x400.jpg" alt="kermit stare"/>
                        </div>
                        <div className="card-content center-align dark-green game-over-content">
                            <div>GAME OVER, MAN</div>
                        </div>
                    </div>
                </div>
                
                <div className="col s4"></div>
            </div>      
        )
    }

}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default GameOver