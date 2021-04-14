
import React from 'react';

import {useLocation} from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import { Formik } from 'formik';
import { useForm } from 'react-hook-form';



export default function RegisterAdmin({ formValues, setFormValues }) {

  const search = useLocation().search;
  const msisdn = new URLSearchParams(search).get('msisdn');

   const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  //console.log("#####" + msisdn + formValues);
  
  const { register, handleSubmit } = useForm({
    defaultValues: formValues
  })

  const fullName = formValues.body.FirstName + ' '+formValues.body.MiddleName  + ' '+formValues.body.LastName;
  return (
  
    <React.Fragment>      

     
         <Formik
     initialValues={formValues}
      validate={values => {
        //  const errors = {};
        //  if (!values.formalFullName || !values.dateOfBirth || !values.gender) {
        //    errors.formalFullName = 'Required';
        //  }
        //  return errors;
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
       Personal Details
      </Typography>   
        <Grid item xs={12}>
          <TextField
                required
                
            id="formalFullName"
            name="formalFullName"
            label="Full Name"
            defaultValue={ fullName}
            onChange={handleChange}
            fullWidth
            autoComplete="formalFullName"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="telephoneNumber"
            name="telephoneNumber"
            label="Telephone"
            defaultValue={msisdn}
            value={msisdn}
            fullWidth
            autoComplete="telephoneNumber"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="farmiliarShortName"
            name="farmiliarShortName"
            label="Farmiliar Short Name"
              
            fullWidth
            autoComplete="farmiliarShortName"
          />
         </Grid>
         <Grid item xs={12}>
          <TextField
            id="email"
            name="email"
            label="Email"
            fullWidth
            autoComplete="email"
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
            label="Birthday"
            value={formValues.body.Birthday}
            defaultValue={formValues.body.Birthday}
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
            defaultValue={formValues.body.Gender}
            autoComplete="gender"
          />
        </Grid>
      </form>
       )}        
         </Formik>
    </React.Fragment>
  );
}