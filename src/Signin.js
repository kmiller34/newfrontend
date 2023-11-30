import React, {Component} from 'react'



import {Link} from 'react-router-dom';

export class Signin extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
            id: "",
            userType: "",
            errorMessage: "",
            redirect : null
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleUserTypeChange = (e) => {
        this.setState({
            userType: e.target.value,
        });
    }

    checkCredentials = () => {
        const { username, password, id, userType } = this.state;

        fetch('http://127.0.0.1:8000/credentials', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                password,
                position: userType
            }),
        })
        // .then(response => {
        //     if (response.ok) {
        //         return response.json();
        //     } else {
        //         throw new Error('Failed to authenticate');
        //     }
        // })
        .then(data => {
            if (!data.isAuthenticated) {
                console.log("hello");
                // console.log(position);
                switch (userType) {
                    case 'patient':
                        localStorage.setItem('id', id)
                        this.setState({ redirect: '/patient' });
                        break;
                    case 'nurse':
                        console.log(username);
                        localStorage.setItem('id', id);
                        this.setState({ redirect: '/nurse' });

                        break;
                    case 'admin':
                       
                        this.setState({ redirect: '/admin' });
                        break;
                    default:
                       
                        break;
                }
            } else {
                this.setState({ errorMessage: 'Invalid credentials' });
                console.log("Username" + username);
            }
        })
        .catch(error => {
            console.error(error);
            
            this.setState({ errorMessage: 'Failed to authenticate' });
        });
    }
    
    render(){
        return(
            <div className = "Centering">
                <div className="form">
                    <h3>Please Sign In</h3>
                    <div className="container">
                        <label htmlFor="uname"><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" name="username" onChange={this.handleChange} required />
                        <div>
                            <label htmlFor="psw"><b>Password</b></label>
                            <input type="password" placeholder="Enter Password" name="password" onChange={this.handleChange} required />
                        </div>
                        <div>
                            <label htmlFor="uname"><b>Please enter your ssn or employeeID</b></label>
                            <div></div>
                            <input type="text" placeholder="Enter Your ID" name="id" onChange={this.handleChange} required />
                        </div>
                        <div className="form-check">
                            {/* Radio buttons for user type selection */}
                            <input
                                className="form-check-input"
                                type="radio"
                                name="userType"
                                id="flexRadioDefault1"
                                value="patient"
                                checked={this.state.userType === 'patient'}
                                onChange={this.handleUserTypeChange}
                            />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">Patient</label>
                            <input
                                className="form-check-input"
                                type="radio"
                                name="userType"
                                id="flexRadioDefault1"
                                value="nurse"
                                checked={this.state.userType === 'nurse'}
                                onChange={this.handleUserTypeChange}
                            />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">Nurse</label>
                            <input
                                className="form-check-input"
                                type="radio"
                                name="userType"
                                id="flexRadioDefault1"
                                value="admin"
                                checked={this.state.userType === 'admin'}
                                onChange={this.handleUserTypeChange}
                            />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">Admin</label>
                            

                        </div>
                        <Link to={this.state.redirect}>
                            <button type="button" onClick={this.checkCredentials}>Login</button>
                        </Link>
                        <p className="error-message">{this.state.errorMessage}</p>
                        <Link to="/PatientRegister">
                            <button type="button">Register</button>
                        </Link>
                    </div>
                </div>
            </div>
            
        )
    }
}