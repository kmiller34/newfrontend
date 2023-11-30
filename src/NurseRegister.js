import React, {Component} from "react";

import {Link} from 'react-router-dom'

export class NurseRegister extends Component{
    constructor(props){
        super(props);

        this.state={
            employeeID: "",
            address: "",
            age: "",
            phoneNumber: "",
            gender: "",
            name: "",
            username: "",
            password: ""
        }
    }

    handleFormSubmit = () => {
        const credentialsData = {
            username: this.state.username,
            password: this.state.password,
            position: "Nurse"
        };
    
        // First, create the Credentials record
        fetch('http://127.0.0.1:8000/credentials', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentialsData),
        })
        .then(response => response.json())
        .then(credentialsData => {
            console.log('Credentials Success:', credentialsData);
    
            // Now, create the Patient record
            const nurseData = {
                employeeID: this.state.employeeID,
                address: this.state.address,
                age: this.state.age,
                phoneNumber: this.state.phoneNumber,
                gender: this.state.gender,
                name: this.state.name,
                username_id: this.state.username
            };
    
            fetch('http://127.0.0.1:8000/nurse', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(nurseData),
            })
            .then(response => response.json())
            .then(nurseData => {
                console.log('Nurse Success:', nurseData);
            })
            .catch((error) => {
                console.error('Nurse Error:', error);
            });
        })
        .catch((error) => {
            console.error('Credentials Error:', error);
        });
    };
    
    render(){
        return(
            <div>
                <div>
                    
                    <div class="container">
                        
                        <div>
                            <text>
                                employeeID
                            </text>
                            <div></div>
                            <input type="text" name="employeeID" value = {this.state.employeeID} onChange = {(e) => this.setState({employeeID: e.target.value})}required/>
                        </div>
                        <div>
                            <text>
                                address
                            </text>
                            <div></div>
                            <input type="text" name="address" value = {this.state.address} onChange = {(e) => this.setState({address: e.target.value})} required/>
                        </div>
                        <div>
                            <text>
                                age
                            </text>
                            <div></div>
                            <input type="text" name="age" value = {this.state.age} onChange={(e) => this.setState({age: e.target.value})} required/>
                        </div>
                        <div>
                            <text>
                                phone number
                            </text>
                            <div></div>
                            <input type="text" name="phoneNumber" value = {this.state.phoneNumber} onChange={(e) => this.setState({phoneNumber: e.target.value})} required/>
                        </div>
                        <div>
                            <text>
                                gender
                            </text>
                            <div></div>
                            <input type="text" name="gender" value = {this.state.gender} onChange = {(e) => this.setState({gender: e.target.value})} required/>
                        </div>
                        <div>
                            <text>
                                name
                            </text>
                            <div></div>
                            <input type="text" name="name" value = {this.state.name} onChange={(e) => this.setState({name: e.target.value})} required/>
                        </div>
                        <div>
                            <text>
                                User Name
                            </text>
                            <div></div>
                            <input type="text" name="username" value = {this.state.username} onChange={(e) => this.setState({username: e.target.value})} required/>
                        </div>
                        <div>
                            <text>
                                Password
                            </text>
                            <div></div>
                            <input type="password" name="position" value = {this.state.password} onChange={(e) => this.setState({password: e.target.value})} required/>
                        </div>
                        <Link to = "/Admin">
                        <button type="button" onClick={this.handleFormSubmit}>
                            Register
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}