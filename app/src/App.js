import logo from './logo.svg';
import './App.css';
import {useState, useEffect ,React} from 'react';

const App = () => {

  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch('api/students')
      .then(response => response.json())
      .then(data => {
        setStudents(data);
        setLoading(false);
      })
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }


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
