import React, {Component} from 'react'
import {Link} from 'react-router-dom';

export class AddVaccine extends Component{
    constructor(props){
        super(props);
        this.state = {
            vaccineID : '',
            companyName : '',
            name : '',
            doses : '',
            availability : '',
            onHold : '',
            textDesc : ''
        };
    }

    handleInputChange = (event) => {
        const {name, value} = event.target;
        this.setState({ [name]: value});
    };

    handleUpdate = () => {
        const { vaccineID, companyName, name, doses, availability, onHold, textDesc } = this.state;
        
        // Construct the request body
        const updatedVaccine = {
          vaccineID,
          companyName,
          name,
          doses,
          availability,
          onHold,
          textDesc,
        };
    
        // Send the PUT request
        fetch('http://127.0.0.1:8000/vaccine', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedVaccine),
        })
          .then(response => response.json())
          .then(data => {
            // Handle the response, e.g., show a success message or redirect
            console.log('Vaccine updated successfully', data);
          })
          .catch(error => {
            // Handle errors
            console.error('Error updating vaccine', error);
          });
      };
    
    render(){
        return(
            <div>
                <div>
                    <text>
                        vaccineID
                    </text>
                    <div class="container">
                        <input type="password" name="vaccineID" value={this.state.vaccineID} onChange={this.handleInputChange} required/>
                        <div>
                            <text>
                                Company Name
                            </text>
                            <div></div>
                            <input type="text" name="companyName" value={this.state.companyName} onChange={this.handleInputChange} required/>
                        </div>
                        <div>
                            <text>
                                Name
                            </text>
                            <div></div>
                            <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} required/>
                        </div>
                        <div>
                            <text>
                                Doses
                            </text>
                            <div></div>
                            <input type="text" name="doses" value={this.state.doses} onChange={this.handleInputChange} required/>
                        </div>
                        <div>
                            <text>
                                Availability
                            </text>
                            <div></div>
                            <input type="text" name="availability" value={this.state.availability} onChange={this.handleInputChange} required/>
                        </div>
                        <div>
                            <text>
                                On Hold
                            </text>
                            <div></div>
                            <input type="text" name="onHold" value={this.state.onHold} onChange={this.handleInputChange} required/>
                        </div>
                        <div>
                            <text>
                                Description
                            </text>
                            <div></div>
                            <input type="text" name="textDesc" value={this.state.textDesc} onChange={this.handleInputChange} required/>
                        </div>
                        <Link to = "/Admin">
                            <button type = "button" onClick={this.handleUpdate}>Update</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}