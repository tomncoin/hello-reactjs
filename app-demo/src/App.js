import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import TopMenu from "./components/TopMenu";
import Products from "./pages/Products";
import List from "./components/List";
import Counter from "./components/Counter";

import {CartProvider,CartContext} from "./contexts/Cart";

export default function App() {
  return (
    
    <Router>
      <CartProvider>
        <div>
          <TopMenu></TopMenu>       
        </div>

        <Routes>
          <Route path="/" element={<Home/>}  />
          <Route path="/products" element={<Products/>}  />
          <Route path="/users" element={<Users/>}  />
        </Routes>
      </CartProvider>
      
    </Router>

    
  );
}

function Home() {
  return <div>
    <h2>Home</h2>

    {/* <br/>
    <h2>List</h2>
    <List data={['A','B','C']} render={item=><div>{item}</div>}></List>
    <List data={['A','B','C']} render={item=><div>{"- " +item}</div>}></List>
    <List data={['A','B','C']} render={item=><div>+ {item}</div>}></List> */}

    <br/>
    <h2>Coutner</h2>
    <Counter>
      {
        ({count})=><strong>{count}</strong>
      }
    </Counter>
    
    <br/>
    <h2>Context</h2>
    <CartProvider>
      <CartContext.Consumer>
        {
          ({quantity, updateQuantity})=><div>
            <h2>{quantity}</h2>
            <button onClick={updateQuantity}>Update Quantity</button>
          </div>
        }
      </CartContext.Consumer>
    </CartProvider>



  </div>
  ;
}


function Users() {
  return <h2>Users</h2>;
}