import { Box, Button, FormControl, FormLabel, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { TextFieldWrapper } from './StyledComponen/Contact'


const initialState ={
  name:'',
  email:'',
  phone:"",
  location:'',
  message:""
}


function Contact() {
  const [formVal, setFormVal] = useState(initialState)

const {name,email,phone,location,message} = formVal;

const handleChange = (e)=>{
    setFormVal({
      ...formVal,
      [e.target.name]:e.target.value
    })
}

const handleSubmit = (e)=>{
  e.preventDefault()
  console.log(formVal)
}

  return (
    <>
     <Typography variant='body1' fontSize="35px" fontWeight='600' textAlign={'center'}>
                Contact us
            </Typography>
    <Grid container sx={{height:"80vh",justifyContent:'center'}}>
        
        <Grid item md={5} sx={{mt:4}}>
          <Box component={'form'} onSubmit={handleSubmit} sx={{borderRadius:'20px',boxShadow:'2px 2px black,-2px -2px black',minHeight:'10px'}}>
            <Grid container sx={{justifyContent:"space-evenly"}} spacing={2}>
            <TextFieldWrapper label="Name" placeholder={'Enter Your Full Name...'} name={'name'} onChange={handleChange} value={name}/>
            <TextFieldWrapper label="Email" placeholder={'Enter Your Email Adress...'} name={'email'} onChange={handleChange} value={email} />
            <TextFieldWrapper label="Phone No" placeholder={'Enter Your Phone No...'} name={'phone'} onChange={handleChange} value={phone}/>
            <TextFieldWrapper label="Location" placeholder={'Enter Your Location...'} name={'location'} onChange={handleChange} value={location}/>
            <TextFieldWrapper label="Message" placeholder={'Type Something you want...'} msg={true} name={'message'} onChange={handleChange} value={message}/>

            <Grid item xs={4}>
                <Button variant='contained' type={'submit'} sx={{px:4,mb:2}}>Contact Now</Button>
            </Grid>
            </Grid>
          </Box>
        </Grid>
    </Grid>
    </>
  )
}

export default Contact