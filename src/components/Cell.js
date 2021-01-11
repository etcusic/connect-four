import React, { Component } from 'react'
import Token from './Token'

export class Cell extends Component {
  render() {
    return (
      <div className="cell">
        <Token />
      </div>
    )
  }
}

export default Cell