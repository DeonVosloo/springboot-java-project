import './App.css';
import AppHeader from "./components/AppHeader/AppHeader";
import StudentsTableGrid from "./components/Students/StudentsTableGrid";
import AddStudentForm from './components/forms/AddStudentForm';
import { Routes, Route } from "react-router-dom";

const App = () => {

  

  return (
    <div className="App">
      <AppHeader/>
      <Routes>
        <Route exact path="/" element={<StudentsTableGrid/>} />
        <Route path="add-student" element={<AddStudentForm/>} />
      </Routes>
    </div>
  );
}

export default App;
