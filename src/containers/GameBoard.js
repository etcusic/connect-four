import React, { Component } from 'react'
import Matrix from '../components/Matrix'

export class GameBoard extends Component {
  render() {
    return (
      <div>
        Welcome to the Matrix
        <div>
            <Matrix />
        </div>
      </div>
    )
  }
}

export default GameBoard