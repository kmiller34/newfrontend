import React, { Component } from "react"

import {Link} from 'react-router-dom'

export class UpdateNurseInfo extends Component{
    constructor(props){
        super(props);
        this.state = {
            address: '',
            phoneNumber: '',
        };
    }

    handleInputChange = (e) => {
        const {name,value} = e.target;
        this.setState({[name]: value});
    };
    handleUpdate = () => {
        const {phoneNumber, address} = this.state;
        const id = localStorage.getItem('id');
        console.log(id);
        const updatedNurse = {
            phoneNumber,
            address
        };

        fetch('http://127.0.0.1:8000/nurse/' + id, {
            method: 'PUT',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify(updatedNurse),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Nurse updated successfully', data);
        })
    }
    render(){
        return(
            <div>
                <div>
                    <text>
                        Phone Number
                    </text>
                    <div class="container">
                        <input type="text" name="phoneNumber" value ={this.state.phoneNumber} onChange = {this.handleInputChange} required/>
                        <div>
                            <text>
                                Address
                            </text>
                            <div></div>
                            <input type="text" name="address" value = {this.state.address} onChange = {this.handleInputChange} required/>
                        </div>
                    </div>
                    <Link to="/Nurse">
                        <button text="buttons" onClick = {this.handleUpdate}>Update</button>
                    </Link>
                 </div>
            </div>
        )
    }
}
