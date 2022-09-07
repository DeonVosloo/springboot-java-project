import './App.css';
import AppHeader from "./components/AppHeader/AppHeader";
import StudentsTableGrid from "./components/Students/StudentsTableGrid";
import AddStudentForm from './components/forms/AddStudentForm';
import { Routes, Route } from "react-router-dom";
import UpdateStudentForm from './components/forms/UpdateStudentFrom';
import LoginForm from './components/forms/LoginForm';
import RegisterForm from './components/forms/RegisterForm';

const App = () => {

  

  return (
    <div className="App">
      <AppHeader/>
      <Routes>
        <Route exact path="/" element={<LoginForm/>} />
        <Route path="admin" element={<StudentsTableGrid/>} />
        <Route path="add-student" element={<AddStudentForm/>} />
        <Route path="update-student" element={<UpdateStudentForm/>} />
        <Route path="register" element={<RegisterForm/>} />
      </Routes>
    </div>
  );
}

export default App;
