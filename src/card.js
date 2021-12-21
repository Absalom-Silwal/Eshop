import classes from './card.module.css'
import { useSelector, useDispatch, connect  } from 'react-redux';
import { renderMatches } from 'react-router-dom';
import { cartAdd } from "./action/cart";
export const Card = ()=>{
    
    const dispatch = useDispatch();
    const fltr = useSelector(state=>state.filter.filter)
    const choice= useSelector(state =>state.filter.choice )   
    
    const productList = useSelector(state=>state.fetchData.products.data.product)
     const renderFilterList = productList.filter((product)=>product.category[1]==choice).map((product)=>{
        
        return(
            <div className={classes.card} key={product.id-1}>
            <h1>{product.name}</h1>
             <p><button onClick={()=>(dispatch(cartAdd(product.id)))}>Add to Cart</button></p>
            </div>
        )
        
     })   
     const renderWholeList = productList.map((product)=>{
      console.log(product.id)
         return(
            <div className={classes.card}>
            <h1>{product.name}</h1>
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
    
      
        
   
    
    

   

