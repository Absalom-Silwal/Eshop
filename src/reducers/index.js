import {fetchData} from './fetchData'
import { combineReducers } from 'redux'
const allreducers = combineReducers({
    fetchData:fetchData,
    
})
export default allreducers;