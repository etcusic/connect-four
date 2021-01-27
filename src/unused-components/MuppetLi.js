import React from 'react'

const MuppetLi = ({ info, initializeSession }) => {
    return (
        <div className="muppets-li center collection-item white-text blue darken-1" onClick={ initializeSession }>
            { info.name }
        </div>
    )
}

export default MuppetLi