import React, { Component } from 'react'

const TokenButton = ({ number }) => {
    return (
      <div className="token-button">
        <div className="button-number">{ number }</div>
      </div>
    )
}

export default TokenButton