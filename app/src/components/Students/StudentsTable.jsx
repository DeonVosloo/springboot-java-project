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
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


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

  const removeStudent = async (id) => {
    await fetch(`/api/delete-student/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(() => {
      let updatedStudents = [...students].filter(i => i.id !== id);
      setStudents(updatedStudents);
    });
  }

  useEffect(() => {
    getStudentsData();
  }, []);

  

  return (
    <TableContainer component={Paper} sx={{display: 'flex', justifyContent: 'center', bgcolor: "#3a3f4a", marginTop: "5%"}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead >
          <TableRow >
            <TableCell sx={{color: "whitesmoke", bgcolor: "#131631"}}>Student Name</TableCell>
            <TableCell sx={{color: "whitesmoke", bgcolor: "#131631"}} align="right">Student Address</TableCell>
            <TableCell sx={{color: "whitesmoke", bgcolor: "#131631"}} align="right">Student Email</TableCell>
            <TableCell sx={{color: "whitesmoke", bgcolor: "#131631"}} align="right">Student Password</TableCell>
            <TableCell sx={{color: "whitesmoke", bgcolor: "#131631"}} align="right">Student Course name</TableCell>
            <TableCell sx={{color: "whitesmoke", bgcolor: "#131631"}} align="right">Edit Student</TableCell>
            <TableCell sx={{color: "whitesmoke", bgcolor: "#131631"}} align="right">Delete Student</TableCell>
            <TableCell sx={{color: "whitesmoke", bgcolor: "#131631"}} align="right">
              <Button variant="contained" sx={{bgcolor: "#4566ad #334b80", ':hover:': {bgcolor: "#334b80"}}}>
                <Typography variant="p" color="white">ADD STUDENT</Typography>
              </Button></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((student) => (
            <TableRow
              key={student.id}
              sx={{'&:last-child td, &:last-child th': { border: 0 }}}
            >
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                  <Grid item xs={4} md={6} lg={12}>
                    <TableCell component="th" scope="row" sx={{color: "whitesmoke"}}>
                      {student.fullName}
                    </TableCell>
                  </Grid>
                  <Grid item xs={4} md={6} lg={12}>
                    <TableCell align="right" sx={{color: "whitesmoke"}}>{student.address}</TableCell>
                  </Grid>
                  <Grid item xs={4} md={6} lg={12}>
                    <TableCell align="right" sx={{color: "whitesmoke"}}>{student.email}</TableCell>
                  </Grid>
                  <Grid item xs={4} md={6} lg={12}>
                    <TableCell align="right" sx={{color: "whitesmoke"}}>{student.password}</TableCell>
                  </Grid>

                  <Grid item xs={4} md={6} lg={12}>
                    <TableCell align="right" sx={{color: "whitesmoke"}}>{student.courseName}</TableCell>
                  </Grid>

                  <Grid item xs={4} md={6} lg={12}>
                    <TableCell align="right" sx={{color: "whitesmoke"}}>
                      <Button variant="contained" 
                        sx={{bgcolor: " #02f071", ':hover': {bgcolor: '#02b555'},}
                        }>

                          <Typography variant="p" color="initial">EDIT</Typography>

                      </Button>
                  </TableCell>
                  </Grid>

                  <Grid item xs={4} md={6} lg={12}>
                    <TableCell align="right" sx={{color: "whitesmoke"}}>
                      <Button variant="contained"  onClick={() => removeStudent(student.id)}
                        sx={{bgcolor: "#fc3d3d", ':hover': {bgcolor: '#bf3030'}}}>

                          <Typography variant="p" color="initial">DELETE</Typography>

                      </Button>
                    </TableCell>
                  </Grid>
                </Grid>
              </Box>
              
              
              
              
              

              



            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
