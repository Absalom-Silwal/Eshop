const initState = {
    quantity : 0
}
const count = 0
const counter = (state = initState,action)=>{
    switch (action.type) {
        case 'increment':
            return {...state,quantity:count+1}
            
            break;
            case 'decrement':
                return {...state,quantity:count-1}
                
                break;
    
        default:
            break;
    }
}