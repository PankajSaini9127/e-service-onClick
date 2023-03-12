import { Box, Button, Dialog, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";

const data = {username:"Pankaj",password:"Pankaj"};

function Login({setFlag}) {
  const navigate = useNavigate()
  
  const [open, setOpen] = useState(true);

  const [formVal, setFormVal] = useState({username:"",password:""})

  const {username,password} = formVal;

  const handleClose = () => {
    // setOpen(false)
  };

  const handleChange = (e)=>{
      setFormVal({
        ...formVal,
        [e.target.name]:e.target.value
      })
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    if(username === data.username && password === data.password){
      setFlag(true);
      navigate('/home')
    }
  }

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
          <Box component={"form"} onSubmit={handleSubmit}>
            <Grid container sx={{justifyContent:'space-evenly'}} spacing={4}>
              <Grid item md={12}>
              <TextField 
            variant="outlined" 
            fullWidth
            label="UserName"
            placeholder="Enter UserName..."
            name="username"
            onChange={handleChange}
            value={username}
            />
              </Grid>
              <Grid item md={12}>
              <TextField 
            variant="outlined"
            label="Password" 
            value={password}
            name="password"
            onChange={handleChange}
            fullWidth
            placeholder="Enter Password..."
            />
              </Grid>

              <Grid item md={12}>
                <Button variant='contained' type="submit" sx={{height:'50px',mb:1}} fullWidth>Login</Button>
              </Grid>
            </Grid>
            
            
            
            <Typography variant="body1">Don't have an account? <NavLink className={'link'} to={'/signup'}>SignUp Now</NavLink></Typography>
          </Box>
        </Grid>
      </Grid>
    </Dialog>
  );
}

export default Login;
