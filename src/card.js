import classes from './card.module.css'
import { useSelector, useDispatch, connect  } from 'react-redux';
import { renderMatches,useHistory } from 'react-router-dom';
import { cartAdd } from "./action/cart";
import Cart from "./Cart";
import {
   Route,
   Switch,
   Routes,
  Link,
 } from "react-router-dom";
export let Card = ()=>{
   
    const dispatch = useDispatch();
    const fltr = useSelector(state=>state.filter.filter)
    const choice= useSelector(state =>state.filter.choice )   
   
    const productList = useSelector(state=>state.fetchData.products.data.product)
     const renderFilterList = productList.filter((product)=>product.category[1]==choice).map((product)=>{
      const pic = `https://electronic-ecommerce.herokuapp.com/${product.image}`
      
        return(
            <div className={classes.card} key={product.id-1}>
             <img src={pic} alt="Denim Jeans" />
            <h1>{product.name}</h1>
            <p className={classes.price}>$19.99</p>
            
            <button onClick={()=>{(dispatch(cartAdd(product.id)));}}>Add to Cart</button>
          
            </div>
        )
        
     })   
     const renderWholeList = productList.map((product)=>{
      
      const price = `Rs ${Number(product.price.slice(1,))*100}`
      console.log(price)
      const pic = `https://electronic-ecommerce.herokuapp.com/${product.image}`
         return(
            <div className={classes.card}>
            <img src={pic} alt="Denim Jeans" />
            <h1>{product.name}</h1>
            <p className={classes.price}>{price}</p>
             <p><button onClick={()=>(dispatch(cartAdd(product.id,1,0)))}>Add to Cart</button></p>
            </div>
         )
     })
            
   if(!fltr){
      
        return <>{renderWholeList}</>
       
   }
   else {
    return <>{renderFilterList}</>
   }
}
    
      
        
   
    
    

   

