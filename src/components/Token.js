import React from 'react'

const Token = ({ row, column, color }) => {
  return <div className="token" style={{backgroundColor: `${color}`}}></div>
}

export default Token