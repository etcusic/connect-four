import React from 'react'

const MuppetLi = ({ info }) => {
    return (
      <div className="muppets-li">
        { info.name }
      </div>
    )
}

export default MuppetLi