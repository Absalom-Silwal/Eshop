import { useSelector } from "react-redux";
const cartaddList = [] 

const initState = {
    cartadd :[{
        productId:'',
        quantity:1,
        amount:0,
    }
        
    ],
    totalAmount:0,


};


export const cart = (state=initState,action)=>{
    let count=0;
    
    

    
    switch (action.type) {
        
        case 'cartadd':
            const cartadd = {
                productId:action.productid,
                quantity:action.quantity,
                amount:action.amount
            }
            cartaddList.push(cartadd)
            
            return {...state,cartadd:cartaddList,totalAmount:0}
            break;
        case 'cartremove':
           console.log(state.cartadd)
           cartaddList.splice(action.pos,1)
            
            return {...state,cartadd:state.cartadd.filter((currentProduct)=>{
                return currentProduct.productId !== action.productid       
            })}
                break;
        case 'increment':
            console.log(state.cartadd[0],action.productId)
            
               return {...state,cartadd:state.cartadd.map((product)=>{
                
                if(product.productId==action.productId){
                    const amount = Number(action.productPrice.slice(1,))
                    if(product.quantity<=action.productStock){
                        
                        return {productId:product.productId,quantity:product.quantity+1,amount:(product.quantity+1)*amount}
                    }else{
                     return {productId:product.productId,quantity:product.quantity,amount:(product.quantity)*amount} 
                    }
                }
                   else{
                    return {productId:product.productId,quantity:product.quantity,amount:0}
                   }
               })}
               break;
               case 'decrement':
                console.log(state.cartadd[0],action.productId)
                
                   return {...state,cartadd:state.cartadd.map((product)=>{
                    
                       if(product.productId==action.productId){
                        const amount = Number(action.productPrice.slice(1,))
                           if(product.quantity>0){
                            return {productId:product.productId,quantity:product.quantity-1,amount:(product.quantity-1)*amount}
                           }else{
                            return {productId:product.productId,quantity:product.quantity,amount:(product.quantity)*amount} 
                           }
                           
                       }
                       else{
                        return {productId:product.productId,quantity:product.quantity,amount:0}
                       }
                   })}
                   break;
    
                break;
        case 'totalCost':
            return {...state,totalAmount:action.totalSum}
            break;    
        default:
            return state
            break;
    }
}