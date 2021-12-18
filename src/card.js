import classes from './card.module.css'
import { useSelector, useDispatch, connect  } from 'react-redux';
export const Card = ()=>{
    const productList = useSelector(state=>state.fetchData.products.data.product)
    const renderList = productList.map((product)=>{
        return(
            <div className={classes.card}>
                <img src="https://electronic-ecommerce.herokuapp.com/" alt="Denim Jeans"/>
                <h1>{product.name}</h1>
                <p className={classes.price}>{product.price}</p>
                <p>stock{product.stock}</p>
                <p><button>Add to Cart</button></p>
            </div>
            
        )

    })
    return <>{renderList}</>
      
        
   
    
    

   
}
