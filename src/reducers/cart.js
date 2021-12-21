import { useSelector } from "react-redux";
const cartContainer = [] 
const initState = {
    cartadd:[]
};


export const cart = (state=initState,action)=>{
    console.log(cartContainer,action.productid)
    

    
    switch (action.type) {
        
        case 'cartadd':
           
            cartContainer.push(action.productid)
            return {...state,cartadd:cartContainer}
            break;
        case 'cartremove':
           console.log(action.productid)
           cartContainer.splice(action.pos,1)
            
            return {...state,cartadd:state.cartadd.filter((currentProduct)=>{
                return currentProduct !== action.productid
                
                
                
            })}
                break;
    
        default:
            return state
            break;
    }
}