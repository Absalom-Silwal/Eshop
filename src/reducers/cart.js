import { useSelector } from "react-redux";
let cartaddList = [] 

const initState = {
    cartadd :[{
        productId:'',
        quantity:1,
        amount:0,
        addTOCart:false
    }
        
    ],
    totalAmount:0,
    redirect:false


};


export const cart = (state=initState,action)=>{
    let count=0;
    
    

    
    switch (action.type) {
        
        case 'cartadd':
            console.log(cartaddList)
            const cartadd = {
                productId:action.productid,
                quantity:action.quantity,
                amount:action.amount,
                
            }
           console.log(action.productObj)
            if(cartaddList.includes(action.obj)){
                return {...state,cartadd:cartaddList,totalAmount:0}  
            }
            else{
                cartaddList.push(cartadd)
            
                return {...state,cartadd:cartaddList,totalAmount:0}
            }
            
            break;
        case 'cartremove':
           console.log(state.cartadd)
           cartaddList.splice(action.pos,1)
            
            return {...state,cartadd:state.cartadd.filter((currentProduct)=>{
                return currentProduct.productId !== action.productid       
            })}
                break;
        case 'increment':
            console.log(state.cartadd[0],action.productId,action.list)
            
               return {...state,cartadd:state.cartadd.map((product)=>{
                
                if(product.productId==action.productId){
                    const amount = Number(action.list[product.productId].price.slice(1,))*100
                    console.log(amount)
                    if(product.quantity<=action.list[product.productId].stock){
                        
                        return {productId:product.productId,quantity:product.quantity+1,amount:(product.quantity+1)*amount}
                    }else{
                     return {productId:product.productId,quantity:product.quantity,amount:(product.quantity)*amount} 
                    }
                }
                   else{
                    const amount = Number(action.list[product.productId].price.slice(1,))*100
                    return {productId:product.productId,quantity:product.quantity,amount:product.quantity*amount}
                   }
               })}
               break;
               case 'decrement':
                console.log(state.cartadd[0],action.productId)
                
                   return {...state,cartadd:state.cartadd.map((product)=>{
                    
                       if(product.productId==action.productId){
                        const amount = Number(action.list[product.productId].price.slice(1,))*100
                           if(product.quantity>0){
                            return {productId:product.productId,quantity:product.quantity-1,amount:(product.quantity-1)*amount}
                           }else{
                            return {productId:product.productId,quantity:product.quantity,amount:(product.quantity)*amount} 
                           }
                           
                       }
                       else{
                        const amount = Number(action.list[product.productId].price.slice(1,))*100
                        return {productId:product.productId,quantity:product.quantity,amount:product.quantity*amount}
                       }
                   })}
                   break;
    
                
        case 'totalCost':
            return {...state,totalAmount:action.totalSum}
            break; 
        case 'cartremoveall':
            cartaddList=[]
            return {...state,cartadd:cartaddList} 
        default:
            return state
            break;
    }
}