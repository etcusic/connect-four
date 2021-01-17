import React from 'react'

const MuppetLi = ({ info, initializeSession }) => {
    return (
        <a href="/home">
            <div className="muppets-li center collection-item white-text blue darken-1" onClick={ initializeSession }>
                { info.name }
            </div>
        </a>
    )
}

export default MuppetLi