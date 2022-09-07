import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { Link,useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';



function LoginForm() {


  const [logins, setLogin] = useState([]);
  const [students, setStudent] = useState([]);
  const [admins, setAdmin] = useState([]);
  const navigate = useNavigate();

  let getLoginData = () => {
    fetch("/api/login", {
    })
      .then((response) => response.json())
      .then((data) => {      
        setLogin(data);
      });
  };

  let getStudentData = () => {
    fetch("/api/students", {
    })
      .then((response) => response.json())
      .then((data) => {      
        setStudent(data);
      });
  };

  let getAdminData = () => {
    fetch("/api/get-admins", {
    })
      .then((response) => response.json())
      .then((data) => {      
        setAdmin(data);
      });
  };

  let CheckIfValidLogin = () =>
  {
    getLoginData();
    logins.map((login) =>
      {
        if (login.email === tempLogin.email && login.password === tempLogin.password) 
        {
          tempLogin.accountType = login.accountType;

          if (tempLogin.accountType.toLocaleUpperCase() === "ADMIN") {
            AdminLogin();
          }
          else if (tempLogin.accountType.toLocaleUpperCase() === "STUDENT") {
            StudentLogin();
          }
        }
      })
  }

  let tempLogin = {
    email: "",
    password: "",
    accountType: ""
  };

  function AdminLogin()
  {
    getAdminData();
    
    admins.map((admin)=>
    {
      if (tempLogin.email === admin.email) 
      {
          navigate('/admin');         
      }
    })
  }

  function StudentLogin()
  {

  }


  let handleEmailChange = (e) =>
  {
    tempLogin.email = e.target.value;
  };
  let handlePasswordChange = (e) =>
  {
    tempLogin.password = e.target.value;
  };


  return (
    <div>
        <Grid container spacing={2} sx={{display: "flex", justifyContent: "center", paddingBottom: "3%"}}>
            <Grid item xs={11} md={10} lg={9}>
                <Box sx={{ flexGrow: 1, border: 1, borderRadius: 2.5, bgcolor: "whitesmoke"}}>
                    <Grid container spacing={2} sx={{display: "flex", justifyContent: "center"}}>
                        <Grid item xs={11.3}>
                            <Typography variant="h2" color="initial" sx={{fontFamily: `Ubuntu, sans-serif`, marginTop: "2%"}}>Login</Typography>
                            <Typography variant="h4" color="initial" sx={{fontFamily: `Ubuntu, sans-serif`, marginTop: "1%"}}>Enter your Login Details</Typography>
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
                                   onClick={(CheckIfValidLogin)}>
                                  <Typography variant="p" color="initial" sx={{fontFamily: `Ubuntu, sans-serif`}}>Login</Typography>
                                </Button>
                          </Box>
                        </Grid>

                        <Grid item xs={5.5} md={4.5} lg={3.35} sx={{alignSelf: "center"}}>
                        <Box>                     
                                <Button variant="contained" sx={{
                                  maxWidth: "100%", width: "100%", height: 41, bgcolor: "green", marginBottom: "5%", marginTop: "4%",
                                  bgcolor: "#07d969", ':hover': {bgcolor: '#02b555'},
                                  }} component={Link} to="register">
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