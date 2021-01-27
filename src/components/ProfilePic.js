import React from 'react'

const ProfilePic = ({ image }) => {
    return (
      <div id="profile-pic" className="center three-percent">
        <img className="circle responsive-img" src={image} alt="profile pic"></img>
      </div>
    )
}

export default ProfilePic