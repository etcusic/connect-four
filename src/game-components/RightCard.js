import React from 'react-redux'

const RightCard = ({ info, handleClick }) => {
    return (
      <div className="quiz-card" onClick={handleClick}>
        <div class="center">
            { info.side_b }
        </div>
      </div>
    )
}

export default RightCard