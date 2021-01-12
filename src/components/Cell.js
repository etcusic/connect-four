import React from 'react'

const Cell = ({ token }) => {
    return (
      <div className="cell">
        { token }
      </div>
    )
}

export default Cell