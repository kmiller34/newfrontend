
import './App.css';
import {Home} from './Home';
import {Admin} from './Admin';
import {Patient} from './Patient';
import {Nurse} from './Nurse';

import { PatientRegister } from './PatientRegister';
import {Signin} from './Signin';
import {UpdatePatient} from './UpdatePatient';
import { PatientScheduling } from './PatientSchedule';
import {ViewAccount} from './ViewAccount';
import {NurseRegister} from './NurseRegister';
import {ViewPatients} from './ViewPatients';
import {UpdateNurse} from './UpdateNurse';
import {UpdateVaccine} from './UpdateVaccine';
import { UpdateNurseInfo } from './UpdateNurseInfo';
import {AddVaccine} from './AddVaccine';
import {ViewNurses} from './ViewNurses';
import {ViewNurseInfo} from './viewNurseInfo';
import {Vaccinated} from './Vaccinated';
import {NurseSchedule} from './NurseSchedule';
import {BrowserRouter, Route,Routes,NavLink} from 'react-router-dom';

function App() {

  
  return (

    <BrowserRouter>
    <div>
      <div className = "topnav">
        <NavLink className = "btn btn-light btn-outline-primary" to = "/home">Home</NavLink>      
        <NavLink className = "btn btn-light btn-outline-primary" to ="/signin">
          Sign In
        </NavLink>
      </div>
      <Routes>
        <Route path = '/signin' element = {<Signin/>}/>
        <Route path = '/home' element = {<Home/>}/>
        <Route path = '/admin' element = {<Admin/>}/>
        <Route path = '/nurse' element = {<Nurse/>}/>
        <Route path = '/patient' element = {<Patient/>}/>
        <Route path="/patientRegister" element={<PatientRegister/>} />
        <Route path = "/updatePatient" element={<UpdatePatient/>}/>
        <Route path = "/patientScheduling" element={<PatientScheduling/>}/>
        <Route path = "/viewAccount" element={<ViewAccount/>}/>
        <Route path = "/nurseRegister" element = {<NurseRegister/>}/>
        <Route path = "/viewPatients" element = {<ViewPatients/>}/>
        <Route path = "/updateNurse" element = {<UpdateNurse/>}/>
        <Route path = "/updateVaccine" element = {<UpdateVaccine/>}/>
        <Route path = "/updateNurseInfo" element = {<UpdateNurseInfo/>}/>
        <Route path = "/addVaccine" element = {<AddVaccine/>}/>
        <Route path = "/viewNurses" element = {<ViewNurses/>}/>
        <Route path = "/viewNurseInfo" element = {<ViewNurseInfo/>}/>
        <Route path = "/vaccination" element = {<Vaccinated/>}/>
        <Route path = "/nurseSchedule" element = {<NurseSchedule/>}/>
      </Routes> 
    </div>
    </BrowserRouter>
  );
}

export default App;
