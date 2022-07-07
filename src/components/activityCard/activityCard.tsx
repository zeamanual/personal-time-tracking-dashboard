import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './activityCard.css'
let workImage = require('../../assets/images/icon-work.svg')

type Props = {
    type:string,
    current:number,
    previous:number,
    time:string
}


let ActivityCard:React.FC<Props>= (props)=> {
    let state = useSelector(state=>state)
    let dispatch = useDispatch()
    // let {type,current,previous,time}={type:'Work',current:32, previous:36,time:'daily'}
    let {type,current,previous,time}=props
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