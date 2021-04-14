import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { Formik } from 'formik';
import { useForm } from 'react-hook-form';


export default function VehicleDetails({ formValues, setFormValues }) {
    //  const [state , setState] = useState({
    //    licensePlate : "",
    //    make: "",
    //    model : "",
    //    color: "",
    //    manufacturingYear: ""
     
    // })
    const handleChange = (e) => {
        const {id , value} = e.target   
        setFormValues(prevState => ({
            ...prevState,
            [id] : value
        }))
    }
  return (
    <React.Fragment>

      
         <Formik
     initialValues={formValues}
      validate={values => {
         const errors = {};
         if (!values.formalFullName || !values.dateOfBirth || !values.gender) {
           errors.formalFullName = 'Required';
         }
         return errors;
       }}
       OnSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
            setFormValues(values);
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
      >
        {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit}>


      <Typography variant="h6" gutterBottom>
       Vehicle Details
      </Typography>
      <Grid container spacing={3}>
              <Grid item xs={12} sm={ 6}>
          <TextField
                required
                
            id="licensePlate"
            name="licensePlate"
            label="License Plate"
            
            
            fullWidth
            autoComplete="licensePlate"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
                required
                  
            id="make"
            name="make"
            label="Make"
          
            
            fullWidth
            autoComplete="make"
          />
        </Grid>
         <Grid item xs={12} sm={6}>
          <TextField
            required
            id="model"
            name="model"
            label="Model"
     
            // onChange={handleChange}
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
          
            // onChange={handleChange}
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
            autoComplete="manufacturingYear"
          />
        </Grid>
       
            </Grid>
             </form>
       )}        
         </Formik>
    </React.Fragment>
  );
}