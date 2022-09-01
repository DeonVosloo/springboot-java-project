import logo from './logo.svg';
import './App.css';
import {useState, useEffect ,React} from 'react';


const App = () => {

  const [students, setStudents] = useState([]);

   let getStudentsData = () => {
    fetch("/api/students", {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
      .then((response) => response.json())
      .then((data) => {      
        setStudents(data);
        console.log("student data loaded");
      });
  };

 useEffect(() => {
    getStudentsData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="App-intro">
          <h2>Students</h2>
          {students.map(student =>
            <div key={student.id}>
              {student.fullName}
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
