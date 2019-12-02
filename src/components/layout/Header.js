import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import './Header.css';
import Products from '../Products';

function Header() {
  return(
      
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
          <i class="far fa-building"></i> Company Name
          </a>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to={"/"} className="btn btn-danger btn-sm ml-3" activeClassName={"active"}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to={"/about"} className="btn btn-danger btn-sm ml-3" activeClassName={"active"}>About</Link>
          </li>
          </ul>
          <li className="nav-item ml-auto">
            <Link to={"/products/create"} className="btn btn-danger btn-sm ml-3" activeClassName={"active"}>Add New Product</Link>
          </li>
        </nav>
        
      
  )
}
const headerStyle = {
  background: '#333'
}

export default Header;
