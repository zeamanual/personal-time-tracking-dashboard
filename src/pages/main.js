import React from 'react'
import ActivityCard from '../components/activityCard/activityCard'
import PersonalInfoCard from '../components/personalInfoCard/personalInfoCard'
import './main.css'

function Main() {
  return (
    <div className='outer-wraper'>
 <div className='main-page'>
    <div className='first-column'>
        <PersonalInfoCard></PersonalInfoCard> 
    </div>
   
      
        <div className='activity'>
        <ActivityCard></ActivityCard>
        </div>
        <div className='activity'>
        <ActivityCard></ActivityCard>
        </div>
        <div className='activity'>
        <ActivityCard></ActivityCard>
        </div>
        <div className='activity'>
        <ActivityCard></ActivityCard>
        </div>
        <div className='activity'>
        <ActivityCard></ActivityCard>
        </div>
        <div className='activity'>
        <ActivityCard></ActivityCard>
        </div>

    </div>
  
    </div>
  )  
}

export default Main