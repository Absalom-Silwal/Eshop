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

  
  
   console.log()
   return(
      <div>
       {(productList.length===0)?(
            <div>loading</div>
         ):(
            <div>
               {productList.data.product.map((product)=>{
                  return(
                     <div>
                     {
                     (cartProducts.cartadd.length===0)?(
                        <div>
                           {product.name}
                        </div>
                     ):(
                        <div>
                        {
                           cartProducts.cartadd.map((cartProduct)=>{
                              return(
                                 <div>
                                    {
                                       (product.id===cartProduct)?(
                                          <div>
                                             <p>already added</p>
                                             
                                          </div>
                                       ):(
                                          <div>
                                          <p>add to cart</p>

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
               })
            }
            </div>
         )
       }
       </div>
   )
            
      
   
            
         

         
     
            
  
}

      
        
   
    
    

   

