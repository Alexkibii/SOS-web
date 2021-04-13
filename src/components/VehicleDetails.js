import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';


export default function VehicleDetails(props) {
     const [state , setState] = useState({
       licensePlate : "",
       make: "",
       model : "",
       color: "",
       manufacturingYear: ""
     
    })
    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
       Vehicle Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="licensePlate"
            name="licensePlate"
            label="License Plate"
            value={state.licensePlate}
            onChange={handleChange}
           
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="make"
            name="make"
            label="Make"
            value={state.make}
            onChange={handleChange}
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
         <Grid item xs={12} sm={6}>
          <TextField
            required
            id="model"
            name="model"
            label="Model"
            value={state.model}
            onChange={handleChange}
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
         <Grid item xs={12} sm={6}>
          <TextField
            required
            id="color"
            name="color"
            label="Color"
            value={state.color}
            onChange={handleChange}
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="manufacturingYear"
            name="manufacturingYear"
            label="Year Of Manufacture"
           
            fullWidth
            autoComplete="shipping address-line1"
          />
        </Grid>
       
      </Grid>
    </React.Fragment>
  );
}