import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button'
import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField'
import { Link, useLocation } from 'react-router-dom';



function UpdateStudentForm() {

    const [students, setStudents] = useState([]);

     const location = useLocation();
     console.log(location.state.student.id);

      let getStudentData = () => {
    fetch(`/api/student/${1}`, {
    })
      .then((response) => response.json())
      .then((data) => {      
        setStudents(data);
      });
  };

  useEffect(() => {
    getStudentData();
  }, []);



  let updateStudent = async () => {
    await fetch(`/api/update-student/${location.state.student.id}`, {
      method: 'PUT',
      body: JSON.stringify(tempStudent),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "X-Requested-With"
      },
    }).then(response => response.json(),
    )}

  let tempStudent = {
    fullName: "",
    address: "",
    email: "",
    password: "",
    courseName: "",
  };

  let handleNameChange = (e) =>
  {
    tempStudent.fullName = e.target.value;
  };

  let handleAddressChange = (e) =>
  {
    tempStudent.address = e.target.value;
  };

  let handleEmailChange = (e) =>
  {
    tempStudent.email = e.target.value;
  };
  let handlePasswordChange = (e) =>
  {
    tempStudent.password = e.target.value;
  };
  let handleCourseChange = (e) =>
  {
    tempStudent.courseName = e.target.value;
  };



  return (
    <div>
        <Grid container spacing={2} sx={{display: "flex", justifyContent: "center", paddingBottom: "3%"}}>
            <Grid item xs={11} md={10} lg={9}>
                <Box sx={{ flexGrow: 1, border: 1, borderRadius: 2.5, bgcolor: "whitesmoke"}}>
                    <Grid container spacing={2} sx={{display: "flex", justifyContent: "center"}}>
                        <Grid item xs={11.3}>
                            <Typography variant="h2" color="initial" sx={{fontFamily: `Ubuntu, sans-serif`, marginTop: "2%"}}>Update Student</Typography>
                            <Typography variant="h4" color="initial" sx={{fontFamily: `Ubuntu, sans-serif`, marginTop: "1%"}}>Please enter the student details</Typography>
                        </Grid>
                        <Grid item xs={11.3}>
                        <Box>                     
                              <TextField id="" label="Full Name" defaultValue={location.state.student.fullName} onChange={handleNameChange} sx={{ width: 800, maxWidth: '100%', fontFamily: `Ubuntu, sans-serif` }}/>
                          </Box>
                        </Grid>
                        <Grid item xs={11.3}>
                          <Box>                     
                              <TextField id="" label="Address" onChange={handleAddressChange} defaultValue={location.state.student.address}  sx={{ width: 800, maxWidth: '100%', fontFamily: `Ubuntu, sans-serif` }}/>
                          </Box>
                        </Grid>
                        <Grid item xs={11.3}>
                        <Box>                     
                              <TextField id="" label="Email" onChange={handleEmailChange} defaultValue={location.state.student.email} sx={{ width: 800, maxWidth: '100%', fontFamily: `Ubuntu, sans-serif` }}/>
                          </Box>
                        </Grid>
                        <Grid item xs={11.3}>
                          <Box>                     
                              <TextField id="" label="Password" type={"password"} onChange={handlePasswordChange} sx={{ width: 800, maxWidth: '100%', fontFamily: `Ubuntu, sans-serif` }}/>
                          </Box>
 
                        </Grid>
                        <Grid item xs={11.3}>
                          <Box component="form" noValidate autoComplete="off">
                            <FormControl sx={{ width: 800, maxWidth: '100%', marginBottom: "1%", fontFamily: `Ubuntu, sans-serif` }}>
                            <TextField id="" label="Course Name" onChange={handleCourseChange} defaultValue={location.state.student.courseName} sx={{ width: 800, maxWidth: '100%', fontFamily: `Ubuntu, sans-serif` }}/>

                                <Button variant="contained" sx={{
                                  maxWidth: "100%", width: "70%", height: 41, bgcolor: "green", marginBottom: "3%", marginTop: "4%", marginLeft: "15%",
                                  display: "flex", justifyContent: "center"
                                  }} onClick={(updateStudent)} component={Link} to="/">
                                  <Typography variant="p" color="initial" sx={{fontFamily: `Ubuntu, sans-serif`}}>Update Student</Typography>
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

export default UpdateStudentForm