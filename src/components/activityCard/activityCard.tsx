import React from 'react'
import './activityCard.css'
let workImage = require('../../assets/images/icon-work.svg')
function ActivityCard() {
    let {type,current,previous,time}={type:'Work',current:32, previous:36,time:'daily'}
    let keyword:string=''
    if(time=='daily'){
        keyword='Yseterday'
    }else if(time =='weekly'){
        keyword='Last Week'
    }else if(time == 'monthly'){
        keyword='Last Month'
    }
  return (
    <div className='activity-card-container'>
        <div className='activity-inner-card'>
           

        </div>
        <div className='activity-outer-card'>
            <div className='first-row'>
                <p className='type'>{type}</p>
                <p className='dots'>...</p>
            </div>
            <div className='second-row'>
                <p className='current'>{current}hrs</p>
                <p className='previous'>{keyword} - {previous} hrs</p>
            </div>

        </div>

    </div>
  )
}

export default ActivityCard