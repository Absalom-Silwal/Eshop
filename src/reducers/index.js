import {fetchData} from './fetchData'
import filter from "./filter";
import { cart } from "./cart";
import { combineReducers } from 'redux'
const allreducers = combineReducers({
    fetchData:fetchData,
    filter:filter,
    cart:cart
    
})
export default allreducers;