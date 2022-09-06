import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Button from '@mui/material/Button'
import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField'
import { Link } from 'react-router-dom';


function MyFormHelperText(props) {
    const { focused } = useFormControl() || {};
  
    const helperText = React.useMemo(() => {
      if (focused) {
        return props.focusedText;
      }
  
      return props.hintText;
    }, [focused]);
  
    return <FormHelperText>{helperText}</FormHelperText>;
  }

function UpdateStudentForm(props) {

    const [students, setStudents] = useState([]);

      let getStudentsData = () => {
    fetch(`/api/student/${props.studentID}}`, {
    })
      .then((response) => response.json())
      .then((data) => {      
        setStudents(data);
      });
  };

  useEffect(() => {
    getStudentsData();
  }, []);



  let updateStudent = async () => {
    await fetch(`/api/update-student`, {
      method: 'POST',
      body: JSON.stringify(student),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "X-Requested-With"
      },
    }).then(response => response.json(),
    console.log("added student: " + student)
    )}

  let student = {
    fullName: props.student.fullName,
    address: props.student.address,
    email: props.student.email,
    password: "",
    courseName: props.student.courseName,
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
                              <TextField id="" label="Full Name" defaultValue={props.studentObject.fullName} onChange={handleNameChange} sx={{ width: 800, maxWidth: '100%', fontFamily: `Ubuntu, sans-serif` }}/>
                          </Box>
                        </Grid>
                        <Grid item xs={11.3}>
                          <Box>                     
                              <TextField id="" label="Address" onChange={handleAddressChange} defaultValue={props.studentObject.address} sx={{ width: 800, maxWidth: '100%', fontFamily: `Ubuntu, sans-serif` }}/>
                          </Box>
                        </Grid>
                        <Grid item xs={11.3}>
                        <Box>                     
                              <TextField id="" label="Email" onChange={handleEmailChange} defaultValue={props.studentObject.email} sx={{ width: 800, maxWidth: '100%', fontFamily: `Ubuntu, sans-serif` }}/>
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
                            <TextField id="" label="Course Name" onChange={handleCourseChange} defaultValue={props.studentObject.courseName} sx={{ width: 800, maxWidth: '100%', fontFamily: `Ubuntu, sans-serif` }}/>

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