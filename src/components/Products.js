import React, { Component } from 'react';
import axios from 'axios';
import Home from './Home';


import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';



class Products extends Component {
  constructor() {
    super();
    this.state = {
      products: []
    };
  }


  componentDidMount(){
    axios.get('/api/products/')
    .then(res => {this.setState({products: res.data});
  })
  }

  

  render() {
    
    return (
      <div className="container-fluid">

      <div className="row">
        <Home />
      </div>
      <hr className="my-4"></hr>
      <div className="row">
         <div className="container mt-5">
        
        <h2 style={h2Style} className="text-center">OUR PRODUCTS</h2>

        <hr className="my-4"/>
        <div className="row mt-3">
        {this.state.products.map(product => 
        <div className="col-md-6">
          <div className="card mb-3">
            <div style={cardStyle} className="card-body text-center bg-dark text-white">
        <h5 style={h5Style} className="card-title" key={product.id}>{product.name}</h5>
        <p className="card-text">{product.description}</p>
            <p className="card-text"><strong>Price: </strong>{product.price}€</p>
            
      <Link to={'/product/'+ product.id} className="btn btn-danger" activeClassName={"active"}>Info</Link>
            
            </div>
            </div>
          </div>
        )}
        </div>
        
      </div>
      </div>
      </div>
          
     
      
    );
  }
}
const h2Style = {
  borderBottom: '3px solid red',
  width: '270px'
}

const cardStyle = {
  borderRadius: '7px',
}
const h5Style = {
  borderBottom: "2px solid red"
}



export default Products;
