import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import useStyles from './styles';

function PaymentDetails(props) {
  const { formValues } = props;
  const classes = useStyles();
  const {
    telephoneNumber,
    role,
    formalFullName,
    familiarShortName,
    emails,
    dateOfBirth,
    sex,
    otherSexText,
    alternativeIdentifiers
    
  } = formValues;
  return (
    <Grid item xs={12} sm={6}>
      <Typography variant="h6" gutterBottom className={classes.title}>
       Member Details
      </Typography>
      <Typography gutterBottom>{`${formalFullName}`}</Typography>
      <Typography gutterBottom>{`${familiarShortName}`}</Typography>
    </Grid>
  );
}

export default PaymentDetails;
