import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { Formik } from 'formik';

import { useForm } from "react-hook-form";

//import "./styles.css";

export default function RegisterMember({ formValues, setFormValues }) {
 
    const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  toolbar:{
    display: "flex", 
    flexDirection: "row", 
    justifyContent: "start",
    alignItems: "center",
    width:"100%",        
  },
  img: {
    height: "auto",
    
  }
}));
  const classes = useStyles();
  
 const [indexes, setIndexes] = React.useState([]);
  const [counter, setCounter] = React.useState(0);
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  const addMember = () => {
    setIndexes(prevIndexes => [...prevIndexes, counter]);
    setCounter(prevCounter => prevCounter + 1);
  };

  const removeMember = index => () => {
    setIndexes(prevIndexes => [...prevIndexes.filter(item => item !== index)]);
    setCounter(prevCounter => prevCounter - 1);
  };

  const clearMembers = () => {
    setIndexes([]);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {indexes.map(index => {
        const fieldName = `members[${index}]`;
          return (
             <React.Fragment name={fieldName} key={fieldName}>      

     
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
      Member registration
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
            defaultValue="Member"
            name="role"
            label="Role"
            fullWidth
            autoComplete="role"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField id="dateOfBirth" type = "date" name="dateOfBirth"   label="Date of Birth" fullWidth required />
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
        
        <Grid item xs={12}>
          <Button variant="contained"
                  color="primary"
                  onClick={removeMember(index)}
                  className={classes.button}>
              Remove
          </Button>
      </Grid>
    
      </form>
       )}
        
         </Formik>
    </React.Fragment>
              
        );
      })}
          
          <Button variant="contained"
              color="primary"
              onClick={addMember}
              className={classes.button}>
              Add Member
          </Button>
      
          <Button variant="contained"
              color="primary"
              onClick={clearMembers}
              className={classes.button}>
             Clear Members
          </Button>
    
    </form>
  );
}

