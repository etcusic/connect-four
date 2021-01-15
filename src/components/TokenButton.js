import React from 'react'

const TokenButton = ({ number, handleClick }) => {
    return (
      <div className="token-button" onClick={handleClick}>
        <div className="button-number">{ number }</div>
      </div>
    )
}

export default TokenButton