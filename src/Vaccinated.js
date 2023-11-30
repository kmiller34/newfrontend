import React, {Component} from 'react'
import {Link} from 'react-router-dom';

export class Vaccinated extends Component{
    constructor(props){
        super(props);
        this.state = {
            doses : '',
            timeSlot : '',
            nurse : '',
            patient : '',
            vaccine : '',
            recordID : ''
        };
    }

    handleInputChange = (event) => {
        const {name, value} = event.target;
        this.setState({ [name]: value});
    };

    handleUpdate = () => {
        const { doses, timeSlot, nurse, patient, vaccine, recordID } = this.state;
        
        // Construct the request body
        const schedule = {
          vaccine,
          nurse,
          patient,
          doses,
          timeSlot,
          recordID,
        };
    
        // Send the PUT request
        fetch('http://127.0.0.1:8000/vaccinationRecord', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(schedule),
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
                        vaccine ID
                    </text>
                    <div class="container">
                        <input type="password" name="vaccine" value={this.state.vaccine} onChange={this.handleInputChange} required/>
                        <div>
                            <text>
                                nurse ID
                            </text>
                            <div></div>
                            <input type="text" name="nurse" value={this.state.nurse} onChange={this.handleInputChange} required/>
                        </div>
                        <div>
                            <text>
                                record ID
                            </text>
                            <div></div>
                            <input type="text" name="recordID" value={this.state.recordID} onChange={this.handleInputChange} required/>
                        </div>
                        <div>
                            <text>
                                Patient ID
                            </text>
                            <div></div>
                            <input type="text" name="patient" value={this.state.patient} onChange={this.handleInputChange} required/>
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
                                TimeSlot
                            </text>
                            <div></div>
                            <input type="text" name="timeSlot" value={this.state.timeSlot} onChange={this.handleInputChange} required/>
                        </div>
                        <Link to = "/nurse">
                            <button type = "button" onClick={this.handleUpdate}>Update</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}