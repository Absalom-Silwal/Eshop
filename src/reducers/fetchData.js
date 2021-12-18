const initState = {
    products:[]
}
export const fetchData =(state=initState,action)=>{
    console.log(action)
    switch(action.type){
        case 'fetchData':
            return {...state,products:action.payload}
        
            
        default:
            return state
    }
}
