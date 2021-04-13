import React from 'react';

import {useLocation} from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import { Formik } from 'formik';



export default function RegisterAdmin(props) {

   const search = useLocation().search;
  const msisdn = new URLSearchParams(search).get('msisdn');

  console.log("#####" + msisdn);

  return (
  
    <React.Fragment>      

     
         <Formik
      initialValues ={{
      formalFullName: '',        
      telephoneNumber: '',
      dateOfBirth: '',
      gender: '' 
      }}
      validate={values => {
         const errors = {};
         if (!values.formalFullName || !values.dateOfBirth || !values.gender) {
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
                value={ msisdn}
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
        <TextField
          id="date"
          label="Date Of Birth"
          type="date"
          defaultValue="2017-05-24"
          style={{ width: 250 }}
          InputLabelProps={{
            shrink: true,
          }}
        />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="gender"
            name="gender"
            label="Gender"
            fullWidth
            autoComplete="gender"
          />
        </Grid>
      </form>
       )}        
         </Formik>
    </React.Fragment>
  );
}