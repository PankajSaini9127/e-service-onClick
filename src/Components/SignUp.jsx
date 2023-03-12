import { Box, Button, Dialog, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

function SignUp() {
    const [open, setOpen] = useState(true);

    const handleClose = () => {
      // setOpen(false)
    };
  
  return (
    <Dialog open={open} onClose={handleClose}>
      <Grid
        container
        sx={{
            py:8,
          color: "#FFFFF",
          width: "600px",
          justifyContent: "center",
        }}
      >
        <Grid item md={8}>
          <Typography variant="body1" textAlign='center' fontSize="35px" color={'primary'}>E-Services</Typography>
          {/* <Typography variant="body1" textAlign='center' >Login</Typography> */}
          <Box component={"form"}>
            <TextField 
            variant="outlined" 
            fullWidth
            placeholder="Name..."
            label={'Name'}
            />
            <TextField 
            variant="outlined" 
            fullWidth
            label={'Mobile Number'}
            placeholder="Enter Your Mobile Number..."
            sx={{mt:3}}
            />
            <TextField 
            variant="outlined" 
            fullWidth
            label={'Username'}
            placeholder="Enter UserName..."
            sx={{my:3}}
            />
            <TextField 
            variant="outlined" 
            fullWidth
            label={'password'}
            placeholder="Enter Password..."
            sx={{mb:3}}
            />
            <Button variant="contained">Sign-Up</Button>
            <Typography variant="body1">Already have an account <NavLink to={'/login'}>Login Now</NavLink></Typography>
          </Box>
        </Grid>
      </Grid>
    </Dialog>
  )
}

export default SignUp