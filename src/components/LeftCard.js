import React from 'react'

const LeftCard = ({ info, number }) => {
    return (
      <div className="quiz-card" key={`${number}`}>
        <div className="left number" key={number.toString()}>{ number + 1 }</div>
        <div className="center">{ info.side_a }</div>
      </div>
    )
}

export default LeftCard