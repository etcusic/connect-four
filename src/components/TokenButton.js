import React from 'react'

const TokenButton = ({ number }) => {
  return (
    <div className="token-button" key={`button-${number}`}>
      <div className="button-number">{ number }</div>
    </div>
  )
}

export default TokenButton