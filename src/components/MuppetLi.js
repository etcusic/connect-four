import React from 'react'

const MuppetLi = ({ info }) => {
    return (
      <div className="muppets-li center collection-item white-text blue darken-1">
        { info.name }
      </div>
    )
}

export default MuppetLi