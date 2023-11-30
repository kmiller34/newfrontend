import React, {Component} from 'react'

export class ViewPatients extends Component{
    constructor(props){
        super(props);
        this.state = {
            patient: [],
            patientSchedule: [],
        };
    }
    

    fetchPatients = () => {
        fetch('http://127.0.0.1:8000/patient')
        .then(response => response.json())
        .then(data=> {
            // console.log("Patient Data:", data);
            this.setState({patient:data});
        })
        .catch(error => {
            console.error("Error Fetching Patients")
        });
    };
    fetchPatientSchedule(){
        fetch('http://127.0.0.1:8000/vaccinationRecord')
        .then(response => response.json())
        .then(data=> {
            // console.log("Patient Data:", data);
            this.setState({patientSchedule:data});
        })
        .catch(error => {
            console.error("Error Fetching Patients")
        });
    }
    componentDidMount(){
        this.fetchPatients();
        this.fetchPatientSchedule();
        // this.refreshList();
    }
    render(){
        const {
            patient, patientSchedule
        } = this.state;
        console.log(patient);
        return(
            <div>
                <table>
                <thead>
                <tr>
                <th>ssn</th>
                    
                    <th>address</th>
                    <th>age</th>
                    <th>gender</th>
                    <th>race</th>
                    <th>
                    medical history
                    </th>
                    <th>occupation</th>
                    <th>phone number</th>
                    <th>username</th>
                </tr> 
                </thead>
                <tbody>
                    {patient.map(pat => (
                    <tr key={pat.ssn}>
                        <td>{pat.ssn}</td>
                        
                        <td>{pat.address}</td>
                        <td>{pat.age}</td>
                        <td>{pat.gender}</td>
                        <td>{pat.race}</td>
                        <td>{pat.medicalHistory}</td>
                        <td>{pat.occupationalClass}</td>
                        <td>{pat.phoneNumber}</td>
                        <td>{pat.username}</td>
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
                    </tr> 
                    </thead>
                    <tbody>
                        {patientSchedule.map(schedule => (
                        <tr key={schedule.recordID}>
                            <td>{schedule.patient_name}</td>
                            <td>{schedule.timeSlot}</td>           
                            <td>{schedule.nurse_name}</td>
                            <td>{schedule.vaccine_name}</td>
                            <td>{schedule.doses}</td>
                    </tr>
                        ))}    
                    </tbody> 
                </table>
            </div>
        )
    }
}