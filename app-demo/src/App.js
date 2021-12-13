import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import TopMenu from "./components/TopMenu";
import Products from "./pages/Products";


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
  return <h2>Home</h2>;
}


function Users() {
  return <h2>Users</h2>;
}