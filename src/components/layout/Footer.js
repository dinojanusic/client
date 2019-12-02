import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import './Footer.css';


function Footer() {
  return(
      
   
   
      <div className="container-fluid bg-dark text-white">
        <div className="row text-center mt-3 pt-3">
            <div className="col-md-4">
            <i class="fas fa-address-book"></i><strong> Contact Info</strong>
            <hr className="my-4"></hr>
             <p>657-4354</p>  
             <p>emil@mail.com </p>
            </div>
            <div className="col-md-4">
            <i class="fas fa-link"></i><strong> Social Networks</strong>
           <hr className="my-4"></hr>
            <a href="#" target="_blank"> <i className="fab fa-facebook-square"></i> </a>
            <a href="#" target="_blank"> <i className="fab fa-twitter-square"></i> </a>
             <a href="#" target="_blank"> <i className="fab fa-instagram"></i> </a>

            </div>
           < div className="col-md-4">
           <i class="fas fa-map-marker-alt"></i><strong> Location</strong>
           <hr className="my-4"></hr>
             <p>Address 1234</p>  
             <p>City ZIP </p>
            </div>
        </div>
        <div className="row justify-content-center">
          <div col-md-5 m-auto>
          <hr className="my-4"></hr>
      &copy; Dino Janušić
          </div>
        </div>
        
       
  </div>
     
      
  
    
       
      
  )
}



export default Footer;
