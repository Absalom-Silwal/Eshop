import React from "react";
import { useSelector , useDispatch } from "react-redux";
import { cartRemove, price } from "./action/cart";
import { Component ,useEffect } from "react";
import { increment,decrement,totalCost,cartRemoveall } from "./action/cart";
import { cartAdd } from "./action/cart";
import classes from './cart.module.css'
import {  Link } from 'react-router-dom'


const Cart = () => {
  const dispatch = useDispatch();
  let totalSum = 0;
  const crt = useSelector(state => state.cart.cartadd)
  const cartList =()=>{return(crt)}
  const totalCartAmount = useSelector(state=>state.cart.totalAmount)
  const totalItem = crt.length
  const renderList = useSelector(state => state.fetchData.products.data.product)
 console.log(crt.length)
 
 const total =()=> crt.map((product)=>{
 totalSum = totalSum+product.amount
 return dispatch(totalCost(totalSum));
 })


  useEffect(() => {
    
    total()
    
   
}, [crt])

  
  const rendercartList = cartList().map((cart,pos)=>{
  console.log(pos)
   if(typeof(cart.productId)== "number"){
   console.log(pos,cart,renderList[cart.productId].stock)
   const product = renderList[cart.productId].image
   console.log(product)
    const pic = `https://electronic-ecommerce.herokuapp.com/${product}`
    return(
     
      
    <div  className={classes.Cart_Items}>
          <div className={classes.image_box}>
      <img src={pic} style={{ height:'120px' }} />
      </div>
      <div className={classes.about}>
      <h1 className={classes.title}>{renderList[cart.productId-1].name}</h1>
      <h3 className={classes.subtitle}>Rs {renderList[cart.productId-1].price.slice(1,)}</h3>
      
      </div>
      <div className={classes.counter}>
        
        <div classNsme={classes.btn} onClick={()=>{dispatch(increment(cart.productId,renderList))}}>+</div>
        <div className={classes.count}>{cart.quantity}</div>
        <div className={classes.btn} onClick={()=>{dispatch(decrement(cart.productId,renderList))}}>-</div>
 
      </div>
      <div classNane={classes.prices}>
        <div className={classes.amount}>Rs {cart.amount}</div>
        
        <div className={classes.remove} onClick={()=>{dispatch(cartRemove(cart.productId,pos))}}><u>Remove</u></div>
      </div>
    </div>
    


     
      
    )

   }
   
   
  
  })
  if(crt.length>0){
    return(
      <div className={classes.body}>
    <div className={classes.Cart_Container}>
      <div className={classes.Header}>
        <h3 className={classes.Heading}>Shopping Cart</h3>
        
      </div>
      <div>
        <>
          {rendercartList}
        </>
      </div>
    
    
    </div>
    
    <div className={classes.checkout}>
    <div className={classes.total}>
    <div>
    <div className={classes.Subtotal}>Sub-Total</div>
    <div className={classes.items}>`{totalItem} Items`</div>
    </div>
    <div className={classes.total_amount}>Rs {totalCartAmount}</div>
    </div>
    <Link exact to="/checkout"><button className={classes.button} onClick={()=>{dispatch(cartRemoveall())}}>Checkout</button></Link>
    </div>
    
    </div> 
      )
    

    }
    else{
      return(<div>
           <p>Back to product</p>
      </div>
       
      )
      
    
  }

  
       
     
 
};

export default Cart;