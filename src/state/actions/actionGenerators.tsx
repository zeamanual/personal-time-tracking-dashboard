import axios from 'axios'
import constants from '../constants'

type URL = string

let loadData = (url:URL)=>{
    
    return (dispatch:any)=>{
        dispatch({type: constants.LOADING_DATA})
        console.log('data fetch started ')


        fetch('https://wookie.codesubmit.io/time-tracking', {
            method: 'get',
            headers: { 'Content-Type': 'application/json' },

          }).then( (res)=> {
            return res.json()
        }).then(data=>{
            console.log('feteched data',data)
            dispatch({type: constants.DATA_LOADED,payload:data})
        }).catch(error=>{
            console.log('errorr has occured occured',error)
            dispatch({type:constants.LOADING_FAILDED,payload:{errorOccured:true}})
        });
    }
}

let changeTime=(time:string)=>{
    return {
        type:constants.CHANGE_TIME,
        payload:time
    }
}



let ActionCreator = {loadData,changeTime}

export default ActionCreator