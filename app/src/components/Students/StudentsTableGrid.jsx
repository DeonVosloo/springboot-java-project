import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import StudentsTable from './StudentsTable';

function StudentsTableGrid() {
  return (
    <div>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} sx={{display: 'flex', justifyContent: 'center'}}>
                <Grid item xs={12} md={11.3}>
                    <StudentsTable/>
                </Grid>
            </Grid>
        </Box>
  </div>
  )
}

export default StudentsTableGrid