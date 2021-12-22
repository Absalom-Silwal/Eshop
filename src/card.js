import classes from './card.module.css'
import { useSelector, useDispatch } from 'react-redux';
import {  Link } from 'react-router-dom'
import { cartAdd ,removeRedirect } from "./action/cart";

export let Card = ()=>{
 
    const dispatch = useDispatch();
    const fltr = useSelector(state=>state.filter.filter)
    const choice= useSelector(state =>state.filter.choice )   
    const cartObj =  useSelector(state =>state.cart.cartadd )
   console.log(cartObj)

   
   const productList = useSelector(state=>state.fetchData.products.data.product)
   const renderFilterList = productList.filter((product)=>product.category[1]===choice).map((product,pos)=>{
   const pic = `https://electronic-ecommerce.herokuapp.com/${product.image}`
   console.log(cartObj[pos])
        return(
            <div className={classes.card} key={product.id-1}>
             <img src={pic} alt="Denim Jeans" />
            <h1>{product.name}</h1>
            <p className={classes.price}>$19.99</p>
           
            <p>
            <Link exact to="/cart"><p><button onClick={()=>(dispatch(cartAdd(product.id,1,0,cartObj[pos])))}>Add to Cart</button></p></Link>
            </p>
          
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
             <Link exact to="/cart"><p><button onClick={()=>(dispatch(cartAdd(product.id,1,0)))}>Add to Cart</button></p></Link>
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
    
      
        
   
    
    

   

