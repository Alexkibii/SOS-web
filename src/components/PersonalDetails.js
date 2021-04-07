import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Formik } from 'formik';



export default function PersonalDetails() {
  return (
  
    <React.Fragment>      

     
         <Formik
      initialValues ={{
      formalFullName: '',        
      telephoneNumber: '',
      dateOfBirth: '',
      sex: '' 
      }}
      validate={values => {
         const errors = {};
         if (!values.formalFullName || !values.dateOfBirth || !values.sex) {
           errors.formalFullName = 'Required';
         }
         return errors;
       }}
       OnSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
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
       Personal Details
      </Typography>   
        <Grid item xs={12}>
          <TextField
            required
            id="formalFullName"
            name="formalFullName"
            label="Full Name"
           
            fullWidth
            autoComplete="formalFullName"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="telephoneNumber"
            name="telephoneNumber"
            label="Telephone"
            fullWidth
            autoComplete="telephoneNumber"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="role"
            defaultValue="Admin"
            name="role"
            label="Role"
            fullWidth
            autoComplete="role"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField id="dateOfBirth" name="dateOfBirth" label="Date of Birth" fullWidth required />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="sex"
            name="sex"
            label="Sex"
            fullWidth
            autoComplete="sex"
          />
        </Grid>
      </form>
       )}        
         </Formik>
    </React.Fragment>
  );
}