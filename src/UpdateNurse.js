import React, {Component} from 'react'
import {Link} from 'react-router-dom';

export class UpdateNurse extends Component{
    constructor(props){
        super(props);
        this.state = {
            employeeID: '',
            address: '',
            age: '',
            phoneNumber: '',
            gender: '',
            name: '',
        };
    }

    handleInputChange = (e) => {
        const {name,value} = e.target;
        this.setState({[name]: value});
    };
    
    handleUpdate = () => {
        const {employeeID, age, gender, name} = this.state;

        const updatedNurse = {
            employeeID,
            age,
            gender,
            name,
        };

        fetch('http://127.0.0.1:8000/nurse', {
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
        .catch(error => {
            console.error('Error updating nurse', error)
        })
    }
    render(){
        return(
            <div>
                <div>
                    <text>
                        employeeID
                    </text>
                    <div class="container">
                        <input type="text" name="employeeID" value = {this.state.employeeID} onChange = {this.handleInputChange} required/>
                        <div>
                            <text>
                                Age
                            </text>
                            <div></div>
                            <input type="text" name="age" value = {this.state.age} onChange = {this.handleInputChange} required/>
                        </div>
                        <div>
                            <text>
                                Gender
                            </text>
                            <div></div>
                            <input type="text" name="gender" value = {this.state.gender} onChange = {this.handleInputChange} required/>
                        </div>
                        <div>
                            <text>
                                Name
                            </text>
                            <div></div>
                            <input type="text" name="name" value = {this.state.name} onChange = {this.handleInputChange} required/>
                        </div>
                        <Link to = "/Admin">
                            <button type = "button" onClick = {this.handleUpdate}>Update</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}