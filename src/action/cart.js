export const cartAdd = (productid)=>{
    return{
        type:'cartadd',
    productid:productid
    }
}
export const cartRemove = (productid,pos)=>{
    return{
        type:'cartremove',
        productid:productid,
        pos:pos
    }
}