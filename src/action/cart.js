export const cartAdd = (productid,quantity,amount,productObj)=>{
    return{
        type:'cartadd',
        productid:productid,
        quantity:quantity,
        amount:amount,
        productObj : productObj
    }
}
export const cartRemove = (productid,pos)=>{
    return{
        type:'cartremove',
        productid:productid,
        pos:pos
    }
}
export const totalSum =(price)=>{
    return({
        type:'totalCost',
        price:price
    })
}
export const increment = (productId,list)=>{
    return({
        type:'increment',
        productId:productId,
        list:list
    })
}
export const decrement = (productId,list)=>{
    return({
        type:'decrement',
        productId:productId,
        list:list
    })
}
export const totalCost = (totalPrice)=>{
    return(
        {
            type:'totalCost',
            totalSum:totalPrice
        }
    )
}
export const cartRemoveall = ()=>{
    return{
        type:'cartremoveall',
        
    }
}
