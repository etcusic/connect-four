import React, { Component } from 'react'
import TokenButton from './TokenButton'

const ButtonCell = ({number}) => {
    return (
      <div className="button-cell">
        <TokenButton number={number}/>
      </div>
    )
}

export default ButtonCell