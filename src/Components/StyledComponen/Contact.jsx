import { FormControl, Grid, TextField } from "@mui/material"

const TextFieldWrapper =({label,placeholder,msg,name,onChange})=>{
    return(
        <Grid item sm={10}>
        <FormControl fullWidth>
                {/* <FormLabel>{label}</FormLabel> */}
               
               {
                msg? <TextField 
                type={'text'} 
                variant='outlined'
                 label={label}
                  placeholder={placeholder}
                  multiline
                  rows={3}
                  name={name}
                  onChange={onChange}
                  />:<TextField 
                  type={'text'} 
                  name={name}
                  onChange={onChange}
                  variant='outlined'
                   label={label}
                    placeholder={placeholder}
                    />
               } 
            </FormControl>
            </Grid>
    )
}



export {TextFieldWrapper}