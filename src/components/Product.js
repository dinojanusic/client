import React, { Component } from 'react';
import axios from 'axios';



class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {}
      
      
    };
  }

    componentDidMount(){
    const id = this.props.match.params.id
    axios.put('/api/products/'+id)
    .then(res => {this.setState({product: res.data});
  })
  }

  handleReviewChange = (event) => {
    this.setState({
        review: event.target.value
    })
}

  


 
  render() {
    
    return (
      <div className='row mt-5'>
         
        <div className='col-7 m-auto'>
        <div className="card mb-3">
            <div className="card-body">
            <div className="col-md-5">
            <h5 className="card-title"><strong>Name: {this.state.product.name} </strong></h5>
            <p><strong>Description: </strong>{this.state.product.longdescription}</p>
            <p class="card-text"><strong>Price: </strong>{this.state.product.price} Kn</p>
            </div>      
            </div>
            <hr className="my-4"></hr>
            <form onSubmit={this.handleSubmit}>
            <div className="form-group">
                        <label className="col-sm-2 control-label required" htmlFor="review">Review</label>
                        <div className="col-2">
                            <select type="text"
                                    id="review"
                                    
                                    onChange={this.handleReviewChange}
                                    className="form-control">
                                      <option value="1">1</option>
                                      <option value="2">2</option>
                                      <option value="3">3</option>
                                      <option value="4">4</option>
                                      <option value="5">5</option>
                           </select>
                           <button type="submit"
                                    id="product_submit"
                                    className="btn btn-danger mt-3">
                                Submit
                            </button>
                        </div>
                    </div>
            </form>
            </div>
        </div>
      </div>
      
    );
  }
}


export default Product;