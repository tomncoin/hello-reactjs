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

import CartContext from "./contexts/CartContext";
import CartProvider from "./contexts/CartProvider";

export default function App() {
  return (
    
    <Router>
      <div>
        <TopMenu></TopMenu>       
      </div>

      <Routes>
        <Route path="/" element={<Home/>}  />
        <Route path="/products" element={<Products/>}  />
        <Route path="/users" element={<Users/>}  />
      </Routes>
      
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
          (context)=><strong>{context.quantity}</strong>
        }
      </CartContext.Consumer>
    </CartProvider>



  </div>
  ;
}


function Users() {
  return <h2>Users</h2>;
}