type Action = string

let LOAD_DATA:Action='load data'
let LOADING_DATA:Action='loading data'
let LOADING_FAILDED:Action = 'loading failled'
let DATA_LOADED:Action = 'data loaded'
let CHANGE_TIME:Action='change-time'

export default {LOAD_DATA,CHANGE_TIME,LOADING_DATA,LOADING_FAILDED,DATA_LOADED}