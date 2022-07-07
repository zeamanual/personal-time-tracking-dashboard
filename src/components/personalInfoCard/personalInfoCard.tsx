import React from 'react'
import './personalInfoCard.css'
let userImg = require("../../assets/images/image-jeremy.png")
function PersonalInfoCard() {
  return (
    <div className='personal-info-container'>
      <div className='personal-info'>
        <div className='img-container'>
          <img src = {userImg}></img>
        </div>
        <div className='name-container'>
          <p>Report For</p>
          <p className='name'>Jermy Robson</p>
        </div>

      </div>
      <div className='time-container'>
        <p className='time'>Daily</p>
        <p className='time'>Weekly</p>
        <p className='time'>Monthly</p>

      </div>
    </div>
  )
}

export default PersonalInfoCard