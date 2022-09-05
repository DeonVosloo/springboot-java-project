import React from 'react';
import Appheader from '../AppHeader/AppHeader';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';
import Button from '@mui/material/Button'



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

function AddStudentForm() {

  let student = {
    name: "",
    address: "",
    email: "",
    password: "",
    courseName: ""
  }
  return (
    <div>
        <Appheader/>

        <Grid container spacing={2} sx={{display: "flex", justifyContent: "center", paddingBottom: "3%"}}>
            <Grid item xs={11} md={10} lg={9}>
                <Box sx={{ flexGrow: 1, border: 1, borderRadius: 2.5, bgcolor: "whitesmoke"}}>
                    <Grid container spacing={2} sx={{display: "flex", justifyContent: "center"}}>
                        <Grid item xs={11.3}>
                            <Typography variant="h2" color="initial" sx={{fontFamily: `Ubuntu, sans-serif`, marginTop: "2%"}}>Add Student</Typography>
                            <Typography variant="h4" color="initial" sx={{fontFamily: `Ubuntu, sans-serif`, marginTop: "1%"}}>Please enter the student details</Typography>
                        </Grid>
                        <Grid item xs={11.3}>
                            <Box component="form" noValidate autoComplete="off">
                                <FormControl sx={{ width: 800, maxWidth: '100%', fontFamily: `Ubuntu, sans-serif` }}>
                                  <Typography variant="p" color="initial" sx={{
                                    display: "flex", justifyContent: "flex-start", paddingLeft: "1%", paddingBottom: "1%", fontFamily: `Ubuntu, sans-serif`
                                    }}>Full Name</Typography>
                                    <OutlinedInput placeholder="Full Name" variant="standard" />
                                    <MyFormHelperText hintText="" focusedText="Currently Typing the students name" />
                                </FormControl>
                            </Box>
                        </Grid>
                        <Grid item xs={11.3}>
                          <Box component="form" noValidate autoComplete="off">
                            <FormControl sx={{ width: 800, maxWidth: '100%', fontFamily: `Ubuntu, sans-serif` }}>
                                <Typography variant="p" color="initial" sx={{display: "flex", justifyContent: "flex-start", paddingLeft: "1%", paddingBottom: "1%"}}>Address</Typography>
                                <OutlinedInput placeholder="Address" variant="standard" />
                                <MyFormHelperText hintText="" focusedText="Currently Typing the students Address" />
                            </FormControl>
                          </Box>
                        </Grid>
                        <Grid item xs={11.3}>
                          <Box component="form" noValidate autoComplete="off">
                            <FormControl sx={{ width: 800, maxWidth: '100%', fontFamily: `Ubuntu, sans-serif` }}>
                                <Typography variant="p" color="initial" sx={{display: "flex", justifyContent: "flex-start", paddingLeft: "1%", paddingBottom: "1%"}}>Email</Typography>
                                <OutlinedInput placeholder="Email" variant="standard" />
                                <MyFormHelperText hintText="" focusedText="Currently Typing the students Email" />
                            </FormControl>
                          </Box>   
                        </Grid>
                        <Grid item xs={11.3}>
                          <Box component="form" noValidate autoComplete="off">
                            <FormControl sx={{ width: 800, maxWidth: '100%', fontFamily: `Ubuntu, sans-serif` }}>
                                <Typography variant="p" color="initial" sx={{display: "flex", justifyContent: "flex-start", paddingLeft: "1%", paddingBottom: "1%"}}>Password</Typography>
                                <OutlinedInput placeholder="Password" variant="standard" />
                                <MyFormHelperText hintText="" focusedText="Currently Typing the students Password" />
                            </FormControl>
                          </Box>   
                        </Grid>
                        <Grid item xs={11.3}>
                          <Box component="form" noValidate autoComplete="off">
                            <FormControl sx={{ width: 800, maxWidth: '100%', marginBottom: "1%", fontFamily: `Ubuntu, sans-serif` }}>
                                <Typography variant="p" color="initial" sx={{display: "flex", justifyContent: "flex-start", paddingLeft: "1%", paddingBottom: "1%"}}>Course name</Typography>
                                <OutlinedInput placeholder="Course name" variant="standard" />
                                <MyFormHelperText hintText="" focusedText="Currently Typing the students Course Name" />

                                <Button variant="contained" sx={{
                                  maxWidth: "100%", width: "70%", height: 41, bgcolor: "green", marginBottom: "3%", marginTop: "4%", marginLeft: "15%",
                                  display: "flex", justifyContent: "center"
                                  }} >
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