import React from 'react';
import moment from 'moment';
import { Typography, Grid } from '@material-ui/core';
import useStyles from './styles';

function PaymentDetails(props) {
  const { formValues } = props;
  const classes = useStyles();
  const { licensePlate,
    make,
    model,
    color,
    manufacturingYear,
    alternativeVehicleIdentifiers } = formValues;
  return (
    <Grid item container direction="column" xs={12} sm={6}>
      <Typography variant="h6" gutterBottom className={classes.title}>
        Vehicle Details
      </Typography>
      <Grid container>
        <React.Fragment>
          <Grid item xs={6}>
            <Typography gutterBottom>License Plate</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom>{ licensePlate}</Typography>
          </Grid>
        </React.Fragment>
        <React.Fragment>
          <Grid item xs={6}>
            <Typography gutterBottom>Make</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom>{make}</Typography>
          </Grid>
        </React.Fragment>
        <React.Fragment>
          <Grid item xs={6}>
            <Typography gutterBottom>Model</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom>{model}</Typography>
          </Grid>
        </React.Fragment>
        <React.Fragment>
          <Grid item xs={6}>
            <Typography gutterBottom>Color</Typography>
          </Grid>
         <Grid item xs={6}>
            <Typography gutterBottom>{color}</Typography>
          </Grid>
        </React.Fragment>
      </Grid>
    </Grid>
  );
}

export default PaymentDetails;
