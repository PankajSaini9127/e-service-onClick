import { AppBar, Box, Button, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Stack } from '@mui/system';
import { NavLink, useNavigate } from 'react-router-dom';

function Navbar({flag,setFlag}) {
  const navigate = useNavigate();

  const handleLogout = ()=>{
     setFlag(false)
  }

  return (
    <>
    <Box sx={{flexGrow:1}}>
        <AppBar position='fixed' >
           <Toolbar>
          <Typography variant='body1' sx={{fontSize:'30px',fontFamily:"'Dancing Script', cursive",mx:3}}>
            <NavLink to={'/home'} className={'navItem'}>E-Services</NavLink>
                      
          </Typography>
        <Stack container  sx={{flexDirection:"row",flexGrow:1}}>
        <Typography variant='body1' >
        <NavLink to={'/home'} className={'navItem'}>Home</NavLink>
          </Typography>
          <Typography variant='body1'sx={{px:4}}>
          <NavLink to={'/home'} className={'navItem'}> Request For A Service</NavLink>
          </Typography>
          <Typography variant='body1'  >
          <NavLink to={'/home'} className={'navItem'}>Contact Us</NavLink>
          </Typography>
        </Stack>
         {
          flag?<Button color="inherit" onClick={handleLogout}>Logout</Button>      
          :
          <>
          <Button color="inherit" onClick={()=>navigate('/login')}>Login</Button>
          <Button color="inherit" onClick={()=>navigate('/signup')}>SignUp</Button>
          </>
         }
          
           </Toolbar>
        </AppBar>
    </Box>
    </>
  )
}

export default Navbar