import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


import './App.css';
import Products from './components/Products';
import Header from './components/layout/Header';
import About from './components/About';
import Product from './components/Product';
import Create from './components/Create';
import Footer from './components/layout/Footer';


class App extends Component {
  render() {
    return (
      <Router>
      
        <Header /> 
            <div className="main mb-5">
        <Route path={"/"} exact component={Products}/>
        <Route path={"/product/:id"} exact component={Product}/>
        
        <Route path={"/about"} exact component={About}/>
        <Route path={"/products/create"} exact component={Create} />
        </div>
        <Footer />
      
      </Router>
    );
  }
}


export default App;
