import React from 'react'

const RightCard = ({ index, info, handleClick }) => {
    return (
      <div className="quiz-card right-side-card" key={`right-card-${index + 1}`} onClick={handleClick}>
        <div className="center">
            { info.side_b }
        </div>
      </div>
    )
}

export default RightCard