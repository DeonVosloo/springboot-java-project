import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useState, useEffect} from 'react';
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'


export default function StudentsTable() {


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
      });
  };

  useEffect(() => {
    getStudentsData();
  }, []);

  

  return (
    <TableContainer component={Paper} sx={{display: 'flex', justifyContent: 'center', bgcolor: ""}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Student Name</TableCell>
            <TableCell align="right">Student Address</TableCell>
            <TableCell align="right">Student Email</TableCell>
            <TableCell align="right">Student Password</TableCell>
            <TableCell align="right">Student Course name</TableCell>
            <TableCell align="right">Edit Student</TableCell>
            <TableCell align="right">Delete Student</TableCell>
            <TableCell align="right"><Button variant="outlined">
                <Typography variant="p" color="initial">ADD STUDENT</Typography>
              </Button></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((student) => (
            <TableRow
              key={student.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {student.fullName}
              </TableCell>
              <TableCell align="right">{student.address}</TableCell>
              <TableCell align="right">{student.email}</TableCell>
              <TableCell align="right">{student.password}</TableCell>
              <TableCell align="right">{student.courseName}</TableCell>
              <TableCell align="right"><Button variant="outlined">
                <Typography variant="p" color="initial">EDIT</Typography>
              </Button></TableCell>
              <TableCell align="right"><Button variant="outlined">
                <Typography variant="p" color="initial">DELETE</Typography>
              </Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
