import React from 'react';


import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


import Container from '@material-ui/core/Container';



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
    formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SubscriberDetails(props) {
  const classes = useStyles();

 
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <h1>Personal Details</h1>
      <div className={classes.paper}>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
             <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="mnumber"
                name="mobileNumber"
                variant="outlined"
                required
                fullWidth
                id="mobileNumber"
                label="Mobile Number"
                autoFocus
                 value={props.getState("mobileNumber", "")}
                 onChange={props.handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                value={props.getState("firstName", "")}
                 onChange={props.handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                 value={props.getState("lastName", "")}
                 onChange={props.handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                 value={props.getState("lastName", "")}
                 onChange={props.handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
             <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Subscription</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
         value={props.getState("subscription", "")}
        onChange={props.handleChange}
          label="Subscription"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="gold">Gold </MenuItem>
          <MenuItem value="silver">Silver</MenuItem>
          <MenuItem value="platinum">Platinum</MenuItem>
        </Select>
      </FormControl>
            </Grid>
            
          </Grid>
          
         
        </form>
      </div>
  
    </Container>
  );
}