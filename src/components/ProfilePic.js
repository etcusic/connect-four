import React from 'react'

const ProfilePic = ({ image }) => {
    return (
      <div id="profile-pic" class="center three-percent">
        <img class="circle responsive-img" src={image} alt="profile pic"></img>
      </div>
    )
}

export default ProfilePic