import React from 'react';
import Appheader from '../AppHeader/AppHeader';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';

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
  return (
    <div>
        <Appheader/>

        <Grid container spacing={2} sx={{display: "flex", justifyContent: "center"}}>
            <Grid item xs={11} md={10} lg={9}>
                <Box sx={{ flexGrow: 1, border: 1, borderRadius: 2.5, bgcolor: "whitesmoke"}}>
                    <Grid container spacing={2} sx={{display: "flex", justifyContent: "center"}}>
                        <Grid item xs={11.3}>
                            <Typography variant="h2" color="initial">Add Student</Typography>
                        </Grid>
                        <Grid item xs={11.3}>
                            <Box component="form" noValidate autoComplete="off">
                                <FormControl sx={{ width: 800, maxWidth: '100%' }}>
                                    <OutlinedInput placeholder="Please enter the students full name" variant="standard" />
                                    <MyFormHelperText hintText="Enter the students full name" focusedText="Currently Typing the students name" />
                                </FormControl>
                            </Box>
                        </Grid>
                        <Grid item xs={11.3}>

                        </Grid>
                        <Grid item xs={11.3}>

                        </Grid>
                    </Grid>
                </Box>
            </Grid>

      </Grid>
        

    </div>
  )
}

export default AddStudentForm