import React, {Component} from 'react';
import axios from 'axios';

class Form extends Component {
    constructor(props){
        super(props)
    this.state = {
        name: '',
        description: '',
        price: '',
        longdescription: ''
    }
        
}
handleNameChange = (event) => {
    this.setState({
        name: event.target.value
    })
}
handleDescriptionChange = (event) => {
    this.setState({
        description: event.target.value
    })
}
handleLongDescriptionChange = (event) => {
    this.setState({
        longdescription: event.target.value
    })
}
handlePriceChange = (event) => {
    this.setState({
        price: event.target.value
    })
}


submitHandler = (event) => {
   console.log('you added a new product')
    axios.post('/api/products', this.state)
    .then(response => {
        console.log(response)
    })
    .catch(error => {
        console.log(error)
    })
}
        render() {
        
        return (
            <div className="container bg-light">
                <br></br>
            <form name="product_post" className="form-horizontal mt-2 mb-5 justify-content-center" onSubmit={this.submitHandler}>
                <div id="product_post">
                    <div className="form-group">
                        <label className="col-sm-2 control-label required" htmlFor="name">Name</label>
                        <div className="col-sm-12">
                            <input type="text"
                                    id="name"
                                    required="required"
                                    placeholder="Enter product name here..."
                                    value={this.state.name}
                                    onChange={this.handleNameChange}
                                    className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-6 control-label required" htmlFor="description">Short Description (max 70 char)</label>
                        <div className="col-sm-12">
                            <textarea type="text"
                                    maxlenght="70"
                                    id="description"
                                    required="required"
                                    placeholder="Enter product description here..."
                                    value={this.state.description}
                                    onChange={this.handleDescriptionChange}
                                    className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-4 control-label required" htmlFor="longdescription">Long Description</label>
                        <div className="col-sm-12">
                            <textarea type="text"
                                    id="longdescription"
                                    required="required"
                                    placeholder="Enter product description here..."
                                    value={this.state.longDescription}
                                    onChange={this.handleLongDescriptionChange}
                                    className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label required" htmlFor="price">Price</label>
                        
                        <div className="col-sm-12">
                            <input type="text"
                                    id="price"
                                    required="required"
                                    placeholder="Enter product price here..."
                                    value={this.state.price}
                                    onChange={this.handlePriceChange}
                                    className="form-control"/>
                        </div>

                    </div>
                    
                    <div className="form-group text-center">
                        <div className="col-sm-12">
                            <hr className="my-4"></hr>
                            <button type="submit"
                                    id="product_submit"
                                    className="btn btn-danger">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </form>
            </div>
        );
        }
        }


export default Form;