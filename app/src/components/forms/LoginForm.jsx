import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button'
import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField'
import { Link } from 'react-router-dom';



function LoginForm() {


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

  let Login = {
    fullName: "",
    address: "",
    email: "",
    password: "",
    courseName: "",
  };



  let handleEmailChange = (e) =>
  {
    Login.email = e.target.value;
  };
  let handlePasswordChange = (e) =>
  {
    Login.password = e.target.value;
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
                              <TextField id="" label="Email" onChange={handleEmailChange} sx={{ width: 800, maxWidth: '100%', fontFamily: `Ubuntu, sans-serif` }}/>
                          </Box>
                        </Grid>
                        <Grid item xs={11.3}>
                          <Box component="form" noValidate autoComplete="off">
                                <TextField id="" label="Password" type="password" onChange={handlePasswordChange} sx={{ width: 800, maxWidth: '100%', fontFamily: `Ubuntu, sans-serif` }}/>                   
                          </Box>   
                        </Grid>
                        <Grid item xs={5.5} md={4.5} lg={3.35} sx={{alignSelf: "center"}}>
                        <Box>                     
                                <Button variant="contained" sx={{
                                  maxWidth: "100%", width: "100%", height: 41, marginBottom: "5%", marginTop: "4%",
                                  bgcolor: "#07d969", ':hover': {bgcolor: '#02b555'}
                                }}
                                   onClick={(CheckIfValidUser)} component={Link} to="/">
                                  <Typography variant="p" color="initial" sx={{fontFamily: `Ubuntu, sans-serif`}}>Login</Typography>
                                </Button>
                          </Box>
                        </Grid>

                        <Grid item xs={5.5} md={4.5} lg={3.35} sx={{alignSelf: "center"}}>
                        <Box>                     
                                <Button variant="contained" sx={{
                                  maxWidth: "100%", width: "100%", height: 41, bgcolor: "green", marginBottom: "5%", marginTop: "4%",
                                  bgcolor: "#07d969", ':hover': {bgcolor: '#02b555'},
                                  }}>
                                  <Typography variant="p" color="initial" sx={{fontFamily: `Ubuntu, sans-serif`}}>Register</Typography>
                                </Button>
                          </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>

      </Grid>
        

    </div>
  )
}

export default LoginForm