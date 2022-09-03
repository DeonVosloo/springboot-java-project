import logo from './logo.svg';
import './App.css';
import {useState, useEffect ,React} from 'react';
import AppHeader from "./components/AppHeader/AppHeader";
import StudentsTableGrid from "./components/Students/StudentsTableGrid";

const App = () => {

  

  return (
    <div className="App">

      <AppHeader/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="App-intro">
          <h2>Students</h2>
        </div>
      </header>

      <div>
            <StudentsTableGrid/>
          </div>
    </div>
  );
}

export default App;
