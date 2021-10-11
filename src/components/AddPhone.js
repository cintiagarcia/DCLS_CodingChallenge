import React, { Component } from 'react';
import axios from 'axios';

class AddPhone extends Component {
    state = {
        _id: '',
        name: '',
        manufacturer: '',
        description: '',
        color: '',
        price: '',
        imageFileName: '',
        screen: '',
        processor: '',
        ram: ''
    }


handleFormSubmit = (e) => {
    e.preventDefault();
    const {name, manufacturer, description, color, price, imageFileName, screen, processor, ram,} = this.state;
    axios.post("http://localhost:5555/api/phones", {name, manufacturer, description, color, price, imageFileName, screen, processor, ram
    })
    .then (() => {
        this.setState ({name: "", manufacturer: "", description: "", color: "", price: "", imageFileName: "", screen: "", processor: "", ram: "" });
    })
    .catch (error => console.log(error))
}

handleChange = (event) => {
    const {name, value} = event.target;
    this.setState ({[name]: value});
}


render () {
    return (
        <div className="d-flex justify-content-center p-4">
            <div className="card w-50 h-100 p-1">
                <h5 className="card-header info-color white-text text-center py-4">
                    <strong>Add New Phone</strong>      
                </h5>
            <br/>

            <div className="card-body px-lg-5 pt-0">
            <form 
                className="text-center border border-light p-0"
                onSubmit = {this.handleFormSubmit}
            >
                    <label htmlFor="name"></label>
                    <input 
                    placeholder="Name"
                    className="form-control"
                    type="text" 
                    name="name" 
                    value={this.state.name} 
                    onChange= { e => this.handleChange (e) } 
                    />
                    
                    <label htmlFor="manufacturer"></label>
                    <input 
                    placeholder="Manufacturer"
                    className="form-control"
                    type="text" 
                    name="manufacturer" 
                    value={this.state.manufacturer} 
                    onChange= { e => this.handleChange (e) } 
                    />

                    <label htmlFor="description"></label>
                    <input 
                    placeholder="Description"
                    className="form-control"
                    type="text" 
                    name="description" 
                    value={this.state.description} 
                    onChange= { e => this.handleChange (e) } 
                    />

                    <label htmlFor="color"></label>
                    <input 
                    placeholder="Color"
                    className="form-control"
                    type="text" 
                    name="color" 
                    value={this.state.color} 
                    onChange= { e => this.handleChange (e) }
                     />

                    <label htmlFor="price"></label>
                    <input 
                    placeholder="Price"
                    className="form-control"
                    type="text" 
                    name="price" 
                    value={this.state.price} 
                    onChange= { e => this.handleChange (e) } 
                    />

                    <label htmlFor="imageFileName"></label>
                    <input 
                    placeholder="Image"
                    className="form-control"
                    type="text" 
                    name="imageFileName" 
                    value={this.state.imageFileName} 
                    onChange= { e => this.handleChange (e) } 
                    />

                    <label htmlFor="screen"></label>
                    <input 
                    placeholder="Screen"
                    className="form-control"
                    type="text" 
                    name="screen" 
                    value={this.state.screen} 
                    onChange= { e => this.handleChange (e) } 
                    />
                    <label htmlFor="processor"></label>
                    <input
                    placeholder="Processor"
                    className="form-control"
                    type="text" 
                    name="processor"
                    value={this.state.processor} 
                    onChange= { e => this.handleChange (e) } 
                    />
                    <label htmlFor="ram"></label>
                    <input 
                    placeholder="Ram"
                    className="form-control"
                    type="text"
                    name="ram" 
                    value={this.state.ram} 
                    onChange= { e => this.handleChange (e) } />

                    <button 
                    className="btn btn-info active btn-block my-4"
                    type="submit" 
                    value="Submit" >
                    Create this phone
                    </button>

            </form>

            </div>
            </div>
        
        </div>
        )
    }
}

export default AddPhone;
