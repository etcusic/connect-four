import React, { Component } from 'react'

export class TokenButton extends Component {
  render() {
    return (
      <div className="token-button">
        <div className="button-number">{this.props.number}</div>
      </div>
    )
  }
}

export default TokenButton