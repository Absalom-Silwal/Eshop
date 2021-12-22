import { useSelector, useDispatch, connect  } from 'react-redux';

const initState = {
    filter:false,
    choice:'all'
}

const Filter = (state=initState,action)=>{
    
    switch (action.type) {
        case 'applyFilter':
            return {...state,choice:action.choice,filter:true}
            break;
        case 'removeFilter':
            return {...state,choice:action.choice,filter:false}
            break;
        
        default:
            return state
            break;
    }

}
export default Filter;