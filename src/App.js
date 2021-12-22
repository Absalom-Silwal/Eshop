
import {
  Route,
  Switch,
  Routes,
  Link,
} from "react-router-dom";
import { useSelector, useDispatch, connect  } from 'react-redux';
import axios from 'axios' 
import React, { Component ,useEffect } from "react";

import Cart from "./Cart";
import Products from "./Product";
import {fetchData} from './action'
import {Checkout} from  './Checkout'


function App() {
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
        <Link to="/">Products</Link>
        <Link to="/cart">Cart</Link>
        
        
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
