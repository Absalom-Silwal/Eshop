import classes from './card.module.css'
import { useSelector, useDispatch } from 'react-redux';
import {  Link } from 'react-router-dom'
import { cartAdd ,removeRedirect } from "./action/cart";

export let Card = ()=>{
   const dispatch = useDispatch();
   const productList  = useSelector(state => state.fetchData.products)
   const fltr = useSelector(state=>state.filter.filter)
   const choice= useSelector(state =>state.filter.choice )
    const cartProducts = useSelector(state=>state.cart)
   const cartList = useSelector(state=>state.cart.cartList)
   console.log(cartList)
   let check =(id)=> cartList.find(cartid=>cartid===id);
   let checkCart =(id)=>{
      if(check(id)===id){
         return true
      }else{
         return false
      }
   } 
     
   console.log(checkCart(2))
         
   return(
      <div >
       {(productList.length===0)?(
            <div>loading</div>
         ):(
            <div className={classes.card_list}>
               {productList.data.product.map((product)=>{
                  const pic = `https://electronic-ecommerce.herokuapp.com/${product.image}`
                  console.log(checkCart(product.id))
                  return(
                     <div >
                     {
                     (cartProducts.cartadd.length===0)?(
                        <div className={classes.card}>
                           <img src={pic} alt="Denim Jeans" />
                           <h1>{product.name}</h1>
                           <p className={classes.price}>Rs {Number(product.price.slice(1,))*100}</p>
                           <Link exact to="/cart"><p><button onClick={()=>(dispatch(cartAdd(product.id,1,0)))}>Add to Cart</button></p></Link>
                        </div>
                     ):(
                        <div>
                        {
                           (
                              checkCart(product.id)
                           )?(
                              <div className={classes.card}>
                                 <img src={pic} alt="Denim Jeans" />
                                 <h1>{product.name}</h1>
                                 <p className={classes.price}>Rs {Number(product.price.slice(1,))*100}</p>
                                 <p>already added</p>
                        </div>
                           ):(
                              <div className={classes.card}>
                                 <img src={pic} alt="Denim Jeans" />
                                 <h1>{product.name}</h1>
                                 <p className={classes.price}>Rs {Number(product.price.slice(1,))*100}</p>
                                 <Link exact to="/cart"><p><button onClick={()=>(dispatch(cartAdd(product.id,1,0)))}>Add to Cart</button></p></Link>
                              </div>
                           )
                        }
                     </div>
                     )
                  }
                  </div>
                    
                  )
               })
            }
            </div>
         )
       }
       </div>
   )
            
      
   
            
         

         
     
            
  
}

      
        
   
    
    

   

