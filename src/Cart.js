import React from "react";
import { useSelector , useDispatch } from "react-redux";
import { cartRemove, price } from "./action/cart";
import { Component ,useEffect } from "react";
import { increment,decrement,totalCost } from "./action/cart";
import { cartAdd } from "./action/cart";


const Cart = () => {
  const dispatch = useDispatch();
  let totalSum = 0;
  const crt = useSelector(state => state.cart.cartadd)
  const cartList =()=>{return(crt)}
  const renderList = useSelector(state => state.fetchData.products.data.product)
 
 
 const total =()=> crt.map((product)=>{
 totalSum = totalSum+product.amount
 return dispatch(totalCost(totalSum));
 })
console.log(totalSum)

  useEffect(() => {
    
    total()
    
   
}, [crt])
  
  const rendercartList = cartList().map((cart,pos)=>{
    
   if(typeof(cart.productId)== "number"){
   console.log(pos,cart,renderList[cart.productId].stock)

    return(
      <div id={pos}>
      <div >
        <button onClick={()=>{dispatch(cartRemove(cart.productId,pos))}}>remove</button>
      </div>
      <div>
      <p>{renderList[cart.productId-1].name}</p>
      </div>
      <button onClick={()=>{dispatch(increment(cart.productId,renderList[cart.productId-1].stock,renderList[cart.productId-1].price))}}>+</button>
      <p>{cart.quantity}</p>
      <button onClick={()=>{dispatch(decrement(cart.productId,renderList[cart.productId-1].price))}}>-</button>
       <div><p>{cart.amount}</p></div> 
      </div>
    )

   }
   
   
  
  })

  return (
    <div>
      
   
    
    <>
      {rendercartList}
    </>
    </div>
  );
};

export default Cart;