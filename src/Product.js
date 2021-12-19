import React, { Component ,useEffect } from "react";
import axios from 'axios' 
import { Link } from "react-router-dom";
import { useSelector, useDispatch, connect  } from 'react-redux';
import {fetchData} from './action'
import {applyFilter,removeFilter} from './action/filter'
import {Card} from './card'
import classes from './card.module.css'



const Products = () =>{
    
    const dispatch = useDispatch();
    const fetchProducts = async ()=>{
        const response = await axios
        .get('https://electronic-ecommerce.herokuapp.com/api/v1/product')
        .catch((err)=>{
            console.log('Err',err)
        });
        
        dispatch(fetchData(response.data))
    };
    useEffect(() => {
        fetchProducts();
       
    }, [])

    
    
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
       
        <div>
            <Card />
        </div>
        </div>
       
       
        
      
        
          
           

        
    )
}
export default Products;