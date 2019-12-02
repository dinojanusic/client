import React, { Component } from 'react';
import Form from './Form';


class Create extends Component {
    

    

    render() {
        return (
            <div className="col-6 m-auto mt-5">
                <h2 style={h2Style}>Add New Product</h2>
                <Form />
            </div>
        );
    }
}
const h2Style = {
    borderBottom: '3px solid red',
    textAlign: 'center',
    marginTop: '20px'
}

export default Create;