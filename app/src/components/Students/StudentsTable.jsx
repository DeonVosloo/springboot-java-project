import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CustomLinks from '../customLinks/CustomLinks';
import { Link } from 'react-router-dom';


export default function StudentsTable() {


  const [students, setStudents] = useState([]);

  let getStudentsData = () => {
    fetch("/api/students", {
    })
      .then((response) => response.json())
      .then((data) => {      
        setStudents(data);
      });
  };

  let removeStudent = async (id) => {
    await fetch(`/api/delete-student/${id}`, {
      method: 'DELETE',
    }).then(() => {
      let updatedStudents = [...students].filter(i => i.id !== id);
      setStudents(updatedStudents);
    });
  }

  useEffect(() => {
    getStudentsData();
  }, []);

  

  return (
    <TableContainer component={Paper} sx={{display: 'flex', justifyContent: 'center', bgcolor: "#3a3f4a", marginBottom: "2.5%" }}>
      <Table sx={{ minWidth: 650, tableLayout: "fixed" }} aria-label="simple table">
        <TableHead >
          <TableRow >
            <TableCell sx={{color: "whitesmoke", bgcolor: "#131631", fontFamily: `Ubuntu, sans-serif`}}>Student Name</TableCell>
            <TableCell sx={{color: "whitesmoke", bgcolor: "#131631", fontFamily: `Ubuntu, sans-serif`}} align="right">Student Address</TableCell>
            <TableCell sx={{color: "whitesmoke", bgcolor: "#131631", fontFamily: `Ubuntu, sans-serif`}} align="right">Student Email</TableCell>
            <TableCell sx={{color: "whitesmoke", bgcolor: "#131631", fontFamily: `Ubuntu, sans-serif`}} align="right">Student Password</TableCell>
            <TableCell sx={{color: "whitesmoke", bgcolor: "#131631", fontFamily: `Ubuntu, sans-serif`}} align="right">Student Course name</TableCell>
            <TableCell sx={{color: "whitesmoke", bgcolor: "#131631", fontFamily: `Ubuntu, sans-serif`}} align="right">Edit Student</TableCell>
            <TableCell sx={{color: "whitesmoke", bgcolor: "#131631", fontFamily: `Ubuntu, sans-serif`}} align="right">Delete Student</TableCell>
            <TableCell sx={{color: "whitesmoke", bgcolor: "#131631", fontFamily: `Ubuntu, sans-serif`}} align="right">
              <Button variant="contained" sx={{bgcolor: "#4566ad #334b80", ':hover:': {bgcolor: "#334b80"}}} component={Link} to="add-student">
                <Typography variant="p" color="white" sx={{fontFamily: `Ubuntu, sans-serif`}}>Add Student</Typography>
              </Button></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((student) => (
            <TableRow
              key={student.id}
              sx={{'&:last-child td, &:last-child th': { border: 0 }}}
            >
              <TableCell component="th" scope="row" sx={{color: "whitesmoke", fontFamily: `Ubuntu, sans-serif`}}>
                {student.fullName}
              </TableCell>
              <TableCell align="right" sx={{color: "whitesmoke", fontFamily: `Ubuntu, sans-serif`, textOverflow:"ellipsis", overflowX: "hidden"}}>{student.address}</TableCell>
              <TableCell align="right" sx={{color: "whitesmoke", fontFamily: `Ubuntu, sans-serif`, textOverflow:"ellipsis", overflowX: "hidden"}}>{student.email}</TableCell>
              <TableCell align="right" sx={{color: "whitesmoke", fontFamily: `Ubuntu, sans-serif`, textOverflow:"ellipsis", overflowX: "hidden"}}>{student.password}</TableCell>
              <TableCell align="right" sx={{color: "whitesmoke", fontFamily: `Ubuntu, sans-serif`, textOverflow:"ellipsis", overflowX: "hidden"}}>{student.courseName}</TableCell>
              <TableCell align="right" sx={{color: "whitesmoke"}}>
                <Button variant="contained" 
                sx={{bgcolor: " #02f071", ':hover': {bgcolor: '#02b555'},}
                }>
                  <Typography variant="p" color="initial"sx={{fontFamily: `Ubuntu, sans-serif`}}>EDIT</Typography>
                </Button></TableCell>
              <TableCell align="right" sx={{color: "whitesmoke"}}>
                <Button variant="contained"  onClick={() => removeStudent(student.id)}
                sx={{bgcolor: "#fc3d3d", ':hover': {bgcolor: '#bf3030'}}}>
                  <Typography variant="p" color="initial" sx={{fontFamily: `Ubuntu, sans-serif`}}>DELETE</Typography>
                </Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
