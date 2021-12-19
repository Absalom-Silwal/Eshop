import React from "react";
import {
  Route,
  Switch,
  Routes,
  Link,
} from "react-router-dom";


import Cart from "./Cart";
import Products from "./Product";


function App() {
  return (
    <div>
    <h1>abs</h1>
    <nav>
        <Link to="/">Products</Link>
        
    </nav>
    <Routes>
        <Route exact path="/" element={<Products />}>
         
        </Route>
        
       
      </Routes>
     
    </div>
  );
}

export default App;
