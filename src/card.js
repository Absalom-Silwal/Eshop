import classes from './card.module.css'
import { useSelector, useDispatch } from 'react-redux';
import {  Link } from 'react-router-dom'
import { cartAdd ,removeRedirect } from "./action/cart";

export let Card = ()=>{
   const dispatch = useDispatch();
   const productList  = useSelector(state => state.fetchData.products)
   const fltr = useSelector(state=>state.filter.filter)
   const choice= useSelector(state =>state.filter.choice )
   console.log(productList)
  
  
   
   return(
      <div>
       {(productList.length===0)?(
            <div>loading</div>
         ):(
            <div >
               {(!fltr)?(
                  <div className={classes.card_list}>
                  {productList.data.product.map((product,pos)=>{
                     const pic = `https://electronic-ecommerce.herokuapp.com/${product.image}`
                        return(
                        <div className={classes.card}>
                        <img src={pic} alt="Denim Jeans" />
                        <h1>{product.name}</h1>
                        <p className={classes.price}>Rs {Number(product.price.slice(1,))*100}</p>
                        <Link exact to="/cart"><p><button onClick={()=>(dispatch(cartAdd(product.id,1,0)))}>Add to Cart</button></p></Link>
                        </div>
                        
                        )}
                        )}
                  </div>
               ):(<div className={classes.card_list}>
                  {productList.data.product.filter((product)=>product.category[1]===choice).map((product,pos)=>{
                     const pic = `https://electronic-ecommerce.herokuapp.com/${product.image}`
                        return(
                           <div className={classes.card}>
                           <img src={pic} alt="Denim Jeans" />
                           <h1>{product.name}</h1>
                           <p className={classes.price}>Rs{Number(product.price.slice(1,))*100}</p>
                           <Link exact to="/cart"><p><button onClick={()=>(dispatch(cartAdd(product.id,1,0)))}>Add to Cart</button></p></Link>
                           </div>
                        )
                        
                        
                     })}
               </div>)}
                
            </div>
               
            
         )}
      </div>
   )
            
         

         
     
            
  
}

      
        
   
    
    

   

