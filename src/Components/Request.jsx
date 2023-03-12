import { Box, Button, Container, FormControl, FormControlLabel, FormLabel, Grid, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { RadioButton, SelectComponent, TextFieldWrapper } from './StyledComponen/FormFields';


const Location = [
    "Paota",
    "Ratanada",
    "Sardarpura",
    "Jalori Gate",
    "Nyi Sadak",
    "12v Road",
    "Basni",
    "Rotary Circle",
    "Shastri Nagar"
];

const Services = [
    "Paota",
    "Ratanada",
    "Sardarpura",
    "Jalori Gate",
    "Nyi Sadak",
    "12v Road",
    "Basni",
    "Rotary Circle",
    "Shastri Nagar"
];


const initialState= {
  fName:"",
  mName:"",
  lName:"",
  fatherName:"",
  motherName:'',
  gender:"",
  email:'',
  phone:"",
  address:"",
  location:"",
  service:'',
  doa:''
}



function Request() {

  const [formVal, setFormVal] = useState(initialState)

  const {fName, mName,lName,fatherName,motherName,gender,email,phone,address,location,service,doa} =formVal;

const handleChange = (e)=>{
    setFormVal({
      ...formVal,
      [e.target.name]:e.target.value
    })
}

const handleSubmit =(e)=>{
  e.preventDefault()
  console.log(formVal)
}

  return (
    <>
    <Typography variant='body1' fontSize="35px" fontWeight='600' textAlign={'center'}>
                Request For Home Service
            </Typography>
       <Grid container sx={{height:"90vh", justifyContent:"center",mt:6}}>
        <Grid item md={8} sx={{mt:4}}>
          <Box component={'form'} sx={{borderRadius:'20px',boxShadow:'2px 2px black,-2px -2px black',minHeight:'10px'}} onSubmit={handleSubmit}>
           <Container>
            <Grid container sx={{justifyContent:"space-evenly"}} spacing={2}>
            <TextFieldWrapper label="First Name" placeholder={'Enter Your First Name'} name='fName' onChange={handleChange} value={fName}/>
            <TextFieldWrapper label="Middle Name" placeholder={'Enter Your Middle Name'} name='mName' onChange={handleChange} value={mName}/>
            <TextFieldWrapper label="Last Name" placeholder={'Enter Your Last Name'} name='lName' onChange={handleChange} value={lName}/>
            <TextFieldWrapper label="Father Name" placeholder={'Enter Your Father Name'} name='fatherName' onChange={handleChange} value={fatherName}/>
            <TextFieldWrapper label="Mother Name" placeholder={'Enter Your Mother Name'} name='motherName' onChange={handleChange} value={motherName}/>

           <RadioButton name='gender' onChange={handleChange} value={gender}/>

            <TextFieldWrapper label="Email" placeholder={'Enter Your Email Adress...'} name='email' onChange={handleChange} value={email}/>
            <TextFieldWrapper label="Phone No" placeholder={'Enter Your Phone No...'} name='phone' onChange={handleChange} value={phone}/>
            <TextFieldWrapper label="Address" placeholder={'Enter Your Address...'} name='address' onChange={handleChange} value={address}/>
              <SelectComponent label={'Select Nearby Location'} options={Location} name='location' onChange={handleChange} value={location}/>
              <SelectComponent label={'Service Type'} options={Services} name='service' onChange={handleChange} value={service}/>

              <Grid item md={4}>
                 <FormControl fullWidth>
                    <TextField type={'date'} fullWidth label='Appointment Date' autoFocus name='doa' onChange={handleChange} value={doa}/>
                 </FormControl>
              </Grid>
            </Grid>

            <Grid container sx={{justifyContent:"space-evenly",mt:2}}>
            <Grid item>
                <Button variant='contained' type={'submit'} sx={{px:4,mb:2}}>Register</Button>
            </Grid>
            </Grid>
            </Container>
          </Box>
        </Grid>
        </Grid>
    </>
  )
}

export default Request