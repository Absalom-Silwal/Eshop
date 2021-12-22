import React from "react";


import {  useDispatch   } from 'react-redux';

import {applyFilter,removeFilter} from './action/filter'
import {Card} from './card'
import classes from './card.module.css'



const Products = () =>{
    
    const dispatch = useDispatch();
   
    
    
    return(
        <div>
        <div>
        <button onClick={()=>dispatch(removeFilter('all'))}>all</button>
            <button onClick={()=>dispatch(applyFilter('mobile'))}>mobile</button>
            <button onClick={()=>dispatch(applyFilter('watch'))}>watch</button>
            <button onClick={()=>dispatch(applyFilter('laptop'))}>laptop</button>
            <button onClick={()=>dispatch(applyFilter('keyboard'))}>eyboard</button>
            <button onClick={()=>dispatch(applyFilter('headseat'))}>headseat</button>
        </div>
        <div className={classes.card_list}>
            <Card />
        </div>
        
        
        </div>
       
       
        
      
        
          
           

        
    )
}
export default Products;