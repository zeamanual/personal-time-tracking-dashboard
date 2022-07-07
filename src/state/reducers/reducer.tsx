import constants from '../constants'


type State = {
    selected:string
}

type Action = {
    type:string,
    payload?:string
}

let initialState = {
    activities:[],
    selected:'',
    isLoading:false,
    errorOccured:false,
    errorMessage:''
}

let reducer = (state:State=initialState,action:Action)=>{
    switch(action.type){
        case constants.LOAD_DATA:
            return state  
        case constants.CHANGE_TIME:
            return state   
    }
}

export default reducer