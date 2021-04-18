import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { InputField, DatePickerField } from '../../FormFields';

export default function PaymentForm(props) {

//   "licensePlate": "KYN 793Y",
// "make": "Chevrolet",
// "model":"Pickup",
// "color": "White",
// "":"1994",
// "alternativeIdentifiers":["14675"]
  const {
    formField: { licensePlate, make, model, color, manufacturingYear, alternativeVehicleIdentifiers  }
  } = props;

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Vehicle Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <InputField
            name={licensePlate.name}
            label={licensePlate.label}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputField
            name={make.name}
            label={make.label}
            fullWidth
          />
        </Grid>
         <Grid item xs={12} md={6}>
          <InputField
            name={model.name}
            label={model.label}
            fullWidth
          />
        </Grid>
         <Grid item xs={12} md={6}>
          <InputField
            name={color.name}
            label={color.label}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <DatePickerField
            name={manufacturingYear.name}
            label={manufacturingYear.label}
            format="MM/yy"
            views={['year', 'month']}
            minDate={new Date()}
            maxDate={new Date('2050/12/31')}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputField name={alternativeVehicleIdentifiers.name} label={alternativeVehicleIdentifiers.label} fullWidth />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
