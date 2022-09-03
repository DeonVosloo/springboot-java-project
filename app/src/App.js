import logo from './logo.svg';
import './App.css';
import {useState, useEffect ,React} from 'react';
import AppHeader from "./components/AppHeader/AppHeader";
import StudentsTableGrid from "./components/Students/StudentsTableGrid";

const App = () => {

  

  return (
    <div className="App">
      <AppHeader/>
      <div>
        <StudentsTableGrid/>
      </div>
    </div>
  );
}

export default App;
