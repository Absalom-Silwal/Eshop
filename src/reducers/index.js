import {fetchData} from './fetchData'
import filter from "./filter";
import { combineReducers } from 'redux'
const allreducers = combineReducers({
    fetchData:fetchData,
    filter:filter
    
})
export default allreducers;