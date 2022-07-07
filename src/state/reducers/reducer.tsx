import constants from '../constants'


type State = {
    activities:any[],
    selectedTime:string,
    isLoading:boolean,
    errorOccured:boolean,
}

let initialState = {
    activities:[],
    selectedTime:'daily',
    isLoading:false,
    errorOccured:false,
}

let reducer = (state:State=initialState,action:any)=>{
    switch(action.type){
        case constants.LOADING_DATA:
            return {
                ...state,isLoading:true
            }  
        case constants.CHANGE_TIME:
            return {
                ...state,selectedTime:action.payload || 'daily'
            }
        case constants.DATA_LOADED:
            
            return {
                ...state,activities:action.payload,isLoading:false
            }
        case constants.LOADING_FAILDED:
            return {
                ...state, errorOccured:true
            }
        default:
            return state
    }
}

export default reducer