import classes from './card.module.css'
import { useSelector, useDispatch, connect  } from 'react-redux';
import { renderMatches } from 'react-router-dom';
export const Card = ()=>{
    console.log(useSelector(state=>state.filter))
    const fltr = useSelector(state=>state.filter.filter)
    const choice= useSelector(state =>state.filter.choice )   
    
    const productList = useSelector(state=>state.fetchData.products.data.product)
     const renderFilterList = productList.filter((product)=>product.category[1]==choice).map((product)=>{
        
        return(
            <div>
                <p>{product.name}</p>
            </div>
        )
        
     })   
     const renderWholeList = productList.map((product)=>{
        console.log(fltr,product)
         return(
            <div>
            <p>{product.name}</p>
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
    
      
        
   
    
    

   

