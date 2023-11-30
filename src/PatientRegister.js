import React, {Component} from 'react'
import {Link} from 'react-router-dom';



export class PatientRegister extends Component{
    constructor(props){
        super(props);

        this.state = {
            ssn: "",
            address: "",
            age: "",
            gender: "",
            race: "",
            medicalHistory: "",
            occupationalClass: "",
            phoneNumber: "",
            username: "",
            password: ""
        }
    }

    handleFormSubmit = () => {
        const credentialsData = {
            username: this.state.username,
            password: this.state.password,
            position: "Patient"
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
            const patientData = {
                ssn: this.state.ssn,
                address: this.state.address,
                age: this.state.age,
                race: this.state.race,
                phoneNumber: this.state.phoneNumber,
                gender: this.state.gender,
                medicalHistory: this.state.medicalHistory,
                occupationalClass: this.state.occupationalClass,
                username_id: this.state.username,
                name: this.state.name
            };
            console.log('Patient Data:', patientData);
            fetch('http://127.0.0.1:8000/patient', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(patientData),
            })
            .then(response => response.json())
            .then(patientData => {
                console.log('Patient Success:', patientData);
            })
            .catch((error) => {
                console.error('Patient Error:', error);
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
                    <text>
                        SSN(just the number, no '-')
                    </text>
                    <div class="container">
                        <input type="password" name="ssn" value = {this.state.ssn} onChange = {(e) => this.setState({ssn: e.target.value})} required/>
                        <div>
                            <text>
                                Name
                            </text>
                            <div></div>
                            <input type="text" name="name" value = {this.state.name} onChange = {(e) => this.setState({name: e.target.value})} required/>
                        </div>
                        <div>
                            <text>
                                Address
                            </text>
                            <div></div>
                            <input type="text" name="address" value = {this.state.address} onChange = {(e) => this.setState({address: e.target.value})} required/>
                        </div>
                        <div>
                            <text>
                                Age
                            </text>
                            <div></div>
                            <input type="text" name="age" value = {this.state.age} onChange = {(e) => this.setState({age: e.target.value})} required/>
                        </div>
                        <div>
                            <text>
                                Gender
                            </text>
                            <div></div>
                            <input type="text" name="gender" value = {this.state.gender} onChange = {(e) => this.setState({gender: e.target.value})} required/>
                        </div>
                        <div>
                            <text>
                                Race
                            </text>
                            <div></div>
                            <input type="text" name="race" value = {this.state.race} onChange = {(e) => this.setState({race: e.target.value})} required/>
                        </div>
                        <div>
                            <text>
                                Medical History
                            </text>
                            <div></div>
                            <input type="text" name="medicalHistory" value = {this.state.medicalHistory} onChange = {(e) => this.setState({medicalHistory: e.target.value})} required/>
                        </div>
                        <div>
                            <text>
                                Occupational Class
                            </text>
                            <div></div>
                            <input type="text" name="occupationalClass" value = {this.state.occupationalClass} onChange = {(e) => this.setState({occupationalClass: e.target.value})} required/>
                        </div>
                        <div>
                            <text>
                                Phone Number
                            </text>
                            <div></div>
                            <input type="text" name="phoneNumber" value = {this.state.phoneNumber} onChange = {(e) => this.setState({phoneNumber: e.target.value})} required/>
                        </div>
                        <div>
                            <text>
                                User Name
                            </text>
                            <div></div>
                            <input type="text" name="username" value = {this.state.username} onChange = {(e) => this.setState({username: e.target.value})} required/>
                        </div>
                        <div>
                            <text>
                                Password
                            </text>
                            <div></div>
                            <input type="text" name="password" value = {this.state.password} onChange = {(e) => this.setState({password: e.target.value})} required/>
                        </div>
                        <Link to = "/Patient">
                            <button type = "button" onClick = {this.handleFormSubmit}>Register</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}