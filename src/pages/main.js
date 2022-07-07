import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import ActivityCard from '../components/activityCard/activityCard'
import PersonalInfoCard from '../components/personalInfoCard/personalInfoCard'
import ActionCreator from '../state/actions/actionGenerators'
import './main.css'

function Main() {
    let state = useSelector((state)=>state)
    let dispatch = useDispatch()
    React.useEffect(()=>{
        dispatch(ActionCreator.loadData('https://wookie.codesubmit.io/time-tracking'))
    },[])
    console.log('new state',state)
if(state.isLoading){
    return <div className='loading'>
        <p>Loading Data...</p>
    </div>
}
if(state.errorOccured){
    return <div className='error'>
    <p>SomeThing Went Wrong Try Again</p>
</div>
}
  return (
    <div className='outer-wraper'>
 <div className='main-page'>
        <div className='first-column'>
            <PersonalInfoCard></PersonalInfoCard> 
        </div>
        {
            state.activities.map((activity)=>{
                let currentTime = 0
                let previousTime =0
                if(state.selectedTime == 'daily'){
                    currentTime = activity.timeframes.daily.current
                    previousTime=activity.timeframes.daily.previous
                }else if(state.selectedTime=='monthly'){
                    currentTime = activity.timeframes.monthly.current
                    previousTime=activity.timeframes.monthly.previous
                } else if(state.selectedTime=='weekly'){
                    currentTime = activity.timeframes.weekly.current
                    previousTime=activity.timeframes.weekly.previous
                }
                return  (
                    <div className='activity'>
                        <ActivityCard current={currentTime} previous={previousTime}
                        type={activity.title} time={state.selectedTime}  ></ActivityCard>
                    </div>
                )

            })
        }
    </div>
  
    </div>
  )  
}

export default Main