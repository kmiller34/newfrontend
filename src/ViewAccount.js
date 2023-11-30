import React, {Component} from 'react'

// const name;
export class ViewAccount extends Component{

    constructor(props){
        super(props);
        this.state = {
            patient: [],
            patientSchedule: [],
            patientRecord: [],
            patient_name: '',
        };
    }
    

    fetchPatient = () => {
        const id = localStorage.getItem('id');
        console.log(id);
        fetch('http://127.0.0.1:8000/patient/' + id)
        .then(response => response.json())
        .then(data=> {
            const patient_name = data[0].name;
            this.setState({ patient_name, patient: data }, () => {
                this.fetchPatientSchedule();
                this.fetchPatientRecord();
            });
        })
        .catch(error => {
            console.error("Error Fetching Patients")
        });
    };
    fetchPatientSchedule(){
        // console.log(this.state.nurse_name);
        const patient_name  = this.state.patient_name;
        fetch('http://127.0.0.1:8000/vaccinationRecord')
        .then(response => response.json())
        .then(data=> {
            // console.log("Patient Data:", data);
            console.log(data);
            const patientSchedule = data.filter(schedule => schedule.patient_name === patient_name);
            // console.log(nurseSchedules);
            this.setState({patientSchedule});
        })
        .catch(error => {
            console.error("Error Fetching Patients")
        });
    }
    fetchPatientRecord(){
        // console.log(this.state.nurse_name);
        // const value = localStorage.getItem('id');
        const patient_name = this.state.patient_name;
        fetch('http://127.0.0.1:8000/vaccinationScheduling')
        .then(response => response.json())
        .then(data=> {
            // console.log("Patient Data:", data);
            // console.log(nurse_name);
            
            const patientSchedule = data.filter(schedule => schedule.patientID === patient_name);
            // console.log(schedule.patientID);
            // console.log(patientSchedule);
            // console.log(nurseSchedules);
            this.setState({patientSchedule});
        })
        .catch(error => {
            console.error("Error Fetching Patients")
        });
    }
    deleteClick(id){
        fetch('http://127.0.0.1:8000/vaccinationScheduling/' + id, {
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
        // window.nurse_name = '';
        this.fetchPatient();
        // this.fetchNurseSchedule();
    }
    render(){
        const {
            patient, patientSchedule, patientRecord
        } = this.state;
        return(
            <div>
                
                <table>
                <thead>
                <tr>
                <th>ssn</th>
                    <th>Name</th>
                    <th>address</th>
                    <th>age</th>
                    <th>gender</th>
                    <th>race</th>
                    <th>medicalHistory</th>
                    <th>occupationalClass</th>
                    <th>phone number</th>
                    <th>username</th>
                </tr> 
                </thead>
                <tbody>
                    {patient.map(pat => (
                    <tr key={pat.ssn}>
                        <td>{pat.ssn}</td>
                        <td>{pat.name}</td>
                        <td>{pat.address}</td>
                        <td>{pat.age}</td>
                        <td>{pat.gender}</td>
                        <td>{pat.race}</td>
                        <td>{pat.medicalHistory}</td>
                        <td>{pat.occupationalClass}</td>
                        <td>{pat.phoneNumber}</td>
                        <td>{pat.username}</td>
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

                <div></div>
                <table>
                    <thead>
                    <tr>
                    <th>Patient Name</th>
                        <th>Time Slot</th>
                        <th>Nurse</th>
                        <th>dose</th>
                        <th>Cancel</th>
                    </tr> 
                    </thead>
                    <tbody>
                        {patientRecord.map(schedule => (
                        <tr key={schedule.recordID}>
                            <td>{schedule.patient_name}</td>
                            <td>{schedule.timeSlot}</td>           
                            <td>{schedule.nurse_name}</td>
                            <td>{schedule.doses}</td>
                            <td>
                                <button onClick = {()=> this.deleteClick}>
                                    Cancel
                                </button>
                            </td>
                    </tr>
                        ))}    
                    </tbody> 
                </table>
            </div>
        )
    }
}