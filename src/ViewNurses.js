import React, {Component} from 'react'

export class ViewNurses extends Component{
    constructor(props){
        super(props);
        this.state = {
            nurse: [],
            nurseSchedules: [],
        };
    }
    

    fetchNurses = () => {
        fetch('http://127.0.0.1:8000/nurse')
        .then(response => response.json())
        .then(data=> {
            // console.log("Patient Data:", data);
            this.setState({nurse:data});
        })
        .catch(error => {
            console.error("Error Fetching Patients")
        });
    };
    fetchNurseSchedule(){
        fetch('http://127.0.0.1:8000/vaccinationRecord')
        .then(response => response.json())
        .then(data=> {
            // console.log("Patient Data:", data);
            this.setState({nurseSchedules:data});
        })
        .catch(error => {
            console.error("Error Fetching Patients")
        });
    }

    deleteClick(id){
        fetch('http://127.0.0.1:8000/vaccinationRecord/' + id, {
            method:'DELETE',
            headers:{
                'Accept':'application/json',
                'Content-Type': 'application/json' 
            }
        })
        .then(response => response.json())
        .then((result) => {
            
        })
    }
    deleteNurse(id){
        fetch('http://127.0.0.1:8000/nurse/' + id, {
            method:'DELETE',
            headers:{
                'Accept':'application/json',
                'Content-Type': 'application/json' 
            }
        })
        .then(response => response.json())
        .then((result) => {
            
        })
    }
    componentDidMount(){
        const id = localStorage.getItem('id');
        console.log('2pac');
        console.log(id);
        this.fetchNurses();
        this.fetchNurseSchedule();
        // this.refreshList();
    }
    render(){
        const {
            nurse, nurseSchedules
        } = this.state;
        return(
            <div>
                
                <table>
                <thead>
                <tr>
                <th>employeeID</th>
                    <th>Name</th>
                    <th>address</th>
                    <th>age</th>
                    <th>gender</th>
                    <th>phone number</th>
                    <th>username</th>
                    <th>delete</th>
                </tr> 
                </thead>
                <tbody>
                    {nurse.map(nur => (
                    <tr key={nur.employeeID}>
                        <td>{nur.employeeID}</td>
                        <td>{nur.name}</td>
                        <td>{nur.address}</td>
                        <td>{nur.age}</td>
                        <td>{nur.gender}</td>
                        <td>{nur.phoneNumber}</td>
                        <td>{nur.username}</td>
                        <td>
                            <button onClick = {() =>this.deleteNurse(nur.employeeID)}>
                                delete
                            </button>
                        </td>
                    <td>{/* Display scheduled vaccines here */}</td>
                </tr>
                    ))}    
                </tbody>               
                </table>

                <div></div>
                <table>
                    <thead>
                    <tr>
                    <th>Patient Name</th>
                        <th>Time Slot</th>
                        <th>Nurse</th>
                        <th>Vaccine Admin.</th>
                        <th>dose</th>
                        <th>delete</th>
                    </tr> 
                    </thead>
                    <tbody>
                        {nurseSchedules.map(schedule => (
                        <tr key={schedule.recordID}>
                            <td>{schedule.patient_name}</td>
                            <td>{schedule.timeSlot}</td>           
                            <td>{schedule.nurse_name}</td>
                            <td>{schedule.vaccine_name}</td>
                            <td>{schedule.doses}</td>
                            <td>
                                <button onClick={() => this.deleteClick(schedule.recordID)}>delete</button>
                            </td>
                    </tr>
                        ))}    
                    </tbody> 
                </table>
            </div>
        )
    }
}