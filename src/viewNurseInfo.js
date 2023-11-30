import React, {Component} from 'react'

// const name;
export class ViewNurseInfo extends Component{

    constructor(props){
        super(props);
        this.state = {
            nurse: [],
            nurseSchedules: [],
            nurse_name: '',
        };
    }
    

    fetchNurses = () => {
        const id = localStorage.getItem('id');
        console.log(id);
        fetch('http://127.0.0.1:8000/nurse/' + id)
        .then(response => response.json())
        .then(data=> {
            const nurse_name = data[0].name;
            this.setState({ nurse_name, nurse: data }, () => {
                this.fetchNurseSchedule();
            });
        })
        .catch(error => {
            console.error("Error Fetching Patients")
        });
    };
    fetchNurseSchedule(){
        console.log(this.state.nurse_name);
        const nurse_name  = this.state.nurse_name;
        fetch('http://127.0.0.1:8000/vaccinationScheduling')
        .then(response => response.json())
        .then(data=> {
            // console.log("Patient Data:", data);
            console.log(nurse_name);
            const nurseSchedules = data.filter(schedule => schedule.nurse_name === nurse_name);
            // console.log(nurseSchedules);
            this.setState({nurseSchedules});
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
    componentDidMount(){
        // window.nurse_name = '';
        this.fetchNurses();
        // this.fetchNurseSchedule();
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
                        <th>Cancel</th>
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
                            <button onClick={() => this.deleteClick(schedule.recordID)}>Cancel</button>
                            </td>
                    </tr>
                        ))}    
                    </tbody> 
                </table>
            </div>
        )
    }
}