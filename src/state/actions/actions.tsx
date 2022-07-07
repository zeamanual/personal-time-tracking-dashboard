import axios from 'axios'
import constants from '../constants'

type URL = string

let loadData = (url:URL)=>{
    
    return (dispatch:any)=>{
        dispatch({type: constants.LOADING_DATA})

        axios({
            method: 'get',
            url: url,
            headers: {
                "content-type": 'application/json'
            },
        }).then( (res)=> {
            console.log('response of request',res.data)
            dispatch({type: constants.DATA_LOADED,payload:res.data})
        }).catch(error=>{
            dispatch({type:constants.LOADING_FAILDED,payload:{errorOccured:true}})
        });
    }

}




let ActionCreator = {}

export default ActionCreator