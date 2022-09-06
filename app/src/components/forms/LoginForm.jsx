import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button'
import { useState } from 'react';
import TextField from '@mui/material/TextField'
import { Link, useEffect } from 'react-router-dom';



function AddStudentForm() {


    const [students, setStudents] = useState([]);

    let getStudentsData = () => {
      fetch("/api/students", {
      })
        .then((response) => response.json())
        .then((data) => {      
          setStudents(data);
        });
    };

    useEffect(() => {
      getStudentsData();
    }, []);

  let student = {
    fullName: "",
    address: "",
    email: "",
    password: "",
    courseName: "",
  };

  let handleNameChange = (e) =>
  {
    student.fullName = e.target.value;
  };

  let handleAddressChange = (e) =>
  {
    student.address = e.target.value;
  };

  let handleEmailChange = (e) =>
  {
    student.email = e.target.value;
  };
  let handlePasswordChange = (e) =>
  {
    student.password = e.target.value;
  };
  let handleCourseChange = (e) =>
  {
    student.courseName = e.target.value;
  };

  let CheckIfValidUser = (studentEmail, studentPassword) => {
    fetch("/api/students", {
    })
      .then((response) => response.json())
      .then((data) => {      
        setStudents(data);
      });
  };


  return (
    <div>
        <Grid container spacing={2} sx={{display: "flex", justifyContent: "center", paddingBottom: "3%"}}>
            <Grid item xs={11} md={10} lg={9}>
                <Box sx={{ flexGrow: 1, border: 1, borderRadius: 2.5, bgcolor: "whitesmoke"}}>
                    <Grid container spacing={2} sx={{display: "flex", justifyContent: "center"}}>
                        <Grid item xs={11.3}>
                            <Typography variant="h2" color="initial" sx={{fontFamily: `Ubuntu, sans-serif`, marginTop: "2%"}}>Login</Typography>
                            <Typography variant="h4" color="initial" sx={{fontFamily: `Ubuntu, sans-serif`, marginTop: "1%"}}>Please enter your Login Details</Typography>
                        </Grid>
                        <Grid item xs={11.3}>
                        <Box>                     
                              <TextField id="" label="Email" onChange={handleNameChange} sx={{ width: 800, maxWidth: '100%', fontFamily: `Ubuntu, sans-serif` }}/>
                          </Box>
                        </Grid>
                        <Grid item xs={11.3}>
                          <Box>                     
                              <TextField id="" label="Password" type="password" onChange={handleAddressChange} sx={{ width: 800, maxWidth: '100%', fontFamily: `Ubuntu, sans-serif` }}/>
                          </Box>
                        </Grid>
                        <Grid item xs={11.3}>
                          <Box component="form" noValidate autoComplete="off">
                            <FormControl sx={{ width: 800, maxWidth: '100%', marginBottom: "1%", fontFamily: `Ubuntu, sans-serif` }}>
                            <TextField id="" label="Course Name" onChange={handleCourseChange} sx={{ width: 800, maxWidth: '100%', fontFamily: `Ubuntu, sans-serif` }}/>

                                <Button variant="contained" sx={{
                                  maxWidth: "100%", width: "70%", height: 41, bgcolor: "green", marginBottom: "3%", marginTop: "4%", marginLeft: "15%",
                                  display: "flex", justifyContent: "center"
                                  }} onClick={(CheckIfValidUser)} component={Link} to="/">
                                  <Typography variant="p" color="initial" sx={{fontFamily: `Ubuntu, sans-serif`}}>Add Student</Typography>
                                </Button>

                            </FormControl>                     
                          </Box>   
                        </Grid>
                    </Grid>
                </Box>
            </Grid>

      </Grid>
        

    </div>
  )
}

export default AddStudentForm