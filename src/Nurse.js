import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'

export class Nurse extends Component{
    
    render(){
        const storedValue = localStorage.getItem('id');
        console.log(storedValue);
        console.log("bruh");
        return(
            <div class = "navbar">
                <NavLink className = "btn btn-light btn-outline-primary" to = "/nurseSchedule">Schedule an Appointment</NavLink>      
                <NavLink className = "btn btn-light btn-outline-primary" to ="/updateNurseInfo">
                    Update Info
                </NavLink>
                <NavLink className = "btn btn-light btn-outline-primary" to = "/vaccination">Register Vaccination</NavLink>
                <NavLink className = "btn btn-light btn-outline-primary" to ="/viewNurseInfo">View Info</NavLink>
            </div>
        )
    }
}