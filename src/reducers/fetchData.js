const initState = {
    products:[]
}
export const fetchData =(state=initState,action)=>{
    
    switch(action.type){
        case 'fetchData':
            return {...state,products:action.payload}
        
            
        default:
            return state
    }
}
