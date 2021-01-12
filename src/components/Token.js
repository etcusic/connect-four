import React from 'react'

const Token = ({ coordinates, color }) => {
  return <div className="token" style={{backgroundColor: `${color}`}}></div>
}

export default Token