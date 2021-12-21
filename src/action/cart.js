export const cartAdd = (productid,quantity,amount)=>{
    return{
        type:'cartadd',
        productid:productid,
        quantity:quantity,
        amount:amount
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
export const increment = (productId,productStock,productPrice)=>{
    return({
        type:'increment',
        productId:productId,
        productStock:productStock,
        productPrice:productPrice
    })
}
export const decrement = (productId,productPrice)=>{
    return({
        type:'decrement',
        productId:productId,
        productPrice:productPrice
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
