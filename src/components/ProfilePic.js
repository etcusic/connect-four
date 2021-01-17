import React from 'react'

const ProfilePic = ({ image }) => {
    return (
      <div id="profile-pic" class="center">
      { console.log(image) }
        <img class="circle responsive-img" src={image}></img>
      </div>
    )
}

export default ProfilePic