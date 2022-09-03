import logo from './logo.svg';
import './App.css';
import {useState, useEffect ,React} from 'react';
import AppHeader from "./components/AppHeader/AppHeader";
import StudentsTableGrid from "./components/Students/StudentsTableGrid";
import AddStudentForm from './components/forms/AddStudentForm';
import Typography from '@mui/material/Typography'

const App = () => {

  

  return (
    <div className="App">
      <AppHeader/>
      <div>
        <StudentsTableGrid/>
      </div>

      <div>
        <Typography variant="h1" color="white">Add Student Form</Typography>
        <AddStudentForm/>
      </div>
    </div>
  );
}

export default App;
