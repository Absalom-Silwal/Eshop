import React, { Component ,useEffect } from "react";
import axios from 'axios' 
import { Link } from "react-router-dom";
import { useSelector, useDispatch, connect  } from 'react-redux';
import {fetchData} from './action'
import {Card} from './card'
import classes from './card.module.css'



const Products = () =>{
    
    
    const fetchProducts = async ()=>{
        const response = await axios
        .get('https://electronic-ecommerce.herokuapp.com/api/v1/product')
        .catch((err)=>{
            console.log('Err',err)
        });
        console.log(response.data.data)
        dispatch(fetchData(response.data))
    };
    useEffect(() => {
        fetchProducts();
       
    }, [])
    
    const dispatch = useDispatch();
    
    return(
        <div className={classes.card_list}>
           //<Card />
        </div>
        
      
        
          
           

        
    )
}
export default Products;