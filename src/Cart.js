import React from "react";
import { useSelector , useDispatch } from "react-redux";
import { cartRemove } from "./action/cart";
import { Component ,useEffect } from "react";

const Cart = () => {
  const dispatch = useDispatch();
  const crt = useSelector(state => state.cart.cartadd)
  const cartList =()=>{return(crt)}
  const renderList = useSelector(state => state.fetchData.products.data.product)
  
  const rendercartList = cartList().map((cart,pos)=>{
  
   if(typeof(cart)== "number"){
   console.log(pos)
    return(
      <div id={pos}>
      <div >
        <button onClick={()=>{dispatch(cartRemove(cart,pos));}}>remove</button>
      </div>
      <div>
      <p>{renderList[cart-1].name}</p>
      </div>
        
      </div>
    )

   }
   
   
  
  })
  useEffect(() => {
    cartList();
   
}, [crt])
  return (
    <div>
      
   
    
    <>
      {rendercartList}
    </>
    </div>
  );
};

export default Cart;