import { FormControl, FormControlLabel, FormLabel, Grid, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField } from "@mui/material"

const TextFieldWrapper =({label,placeholder,msg,name,onChange})=>{
    return(
        <Grid item md={4}>
        <FormControl fullWidth>
            <FormLabel>{label}</FormLabel>
              <TextField
                  type={'text'} 
                  variant='outlined'
                  onChange={onChange}
                  name={name}
                   label={label}
                    placeholder={placeholder}
                    />
            </FormControl>
            </Grid>
    )
}

const SelectComponent = ({label,options,name,onChange})=>{
    return(
        <>
        <Grid item sm={4}>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
          <Select label={label}
          labelId="demo-simple-select-label"
          onChange={onChange}
          name={name}
          >
            {
                options.map((item,i)=>{
                   return  <MenuItem value={item} key={i}>{item}</MenuItem>
                })
            }
            

          </Select>
           </FormControl>
        </Grid>
        </>
    )
}

const RadioButton = ({name,onChange})=>{
    return(
        <Grid item md={4}>
           <FormControl>
  <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
  <RadioGroup
  row
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="female"
    name={name}
    onChange={onChange}
  >
    <FormControlLabel value="female" control={<Radio />} label="Female" />
    <FormControlLabel value="male" control={<Radio />} label="Male" />
  </RadioGroup>
</FormControl>
           </Grid>
    )
}

export {SelectComponent,TextFieldWrapper,RadioButton}