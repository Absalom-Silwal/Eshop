
import {
  Route,
  Switch,
  Routes,
  Link,
} from "react-router-dom";
import { useSelector, useDispatch, connect  } from 'react-redux';
import axios from 'axios' 
import React, { Component ,useEffect } from "react";
import  icon  from "./shopping-cart-icon.png";

import Cart from "./Cart";
import Products from "./Product";
import {fetchData} from './action'
import {Checkout} from  './Checkout'


function App() {
  console.log(icon)
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

  return (
    <div>
    
    <nav>
        <Link to="/"><p style={{padding:'3px', textDecoration:'none'}}>Products</p></Link>
        <Link to="/cart"><img src={icon} style={{ height:'30px',width:'40px',float:'right',padding:'5px' }}/></Link>
        
        
    </nav>
    <Routes>
        <Route exact path="/" element={<Products />}>
         
        </Route>
        <Route exact path="/cart" element={<Cart />}>
         
         </Route>
         <Route exact path="/checkout" element={<Checkout />}>
         
         </Route>
       
      </Routes>
     
    </div>
  );
}

export default App;
