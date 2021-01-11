import React, { Component } from 'react'
import TokenButton from './TokenButton'

export class ButtonCell extends Component {
  render() {
    return (
      <div className="button-cell">
        <TokenButton />
      </div>
    )
  }
}

export default ButtonCell