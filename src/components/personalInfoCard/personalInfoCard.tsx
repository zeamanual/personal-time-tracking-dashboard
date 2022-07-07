import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import ActionCreator from '../../state/actions/actionGenerators'
import './personalInfoCard.css'
let userImg = require("../../assets/images/image-jeremy.png")
function PersonalInfoCard() {
  let state = useSelector(state=>state)
  let dispatch = useDispatch()

  let timeSelectHandler=(time:string)=>{
    dispatch(ActionCreator.changeTime(time))
  }

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
        <p className='time' onClick={()=>{
            timeSelectHandler('daily')
        }}>Daily</p>
        <p className='time' onClick={()=>{
            timeSelectHandler('weekly')
        }}>Weekly</p>
        <p className='time' onClick={()=>{
            timeSelectHandler('monthly')
        }}>Monthly</p>

      </div>
    </div>
  )
}

export default PersonalInfoCard