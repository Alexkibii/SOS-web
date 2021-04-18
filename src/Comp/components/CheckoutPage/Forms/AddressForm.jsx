import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { InputField, CheckboxField, SelectField, DatePickerField } from '../../FormFields';

const cities = [
  {
    value: undefined,
    label: 'None'
  },
  {
    value: '1',
    label: 'New York'
  },
  {
    value: '2',
    label: 'Chicago'
  },
  {
    value: '3',
    label: 'Saigon'
  }
];

const sexes = [
  {
    value: undefined,
    label: 'None'
  },
  {
    value: '1',
    label: 'Male'
  },
  {
    value: '2',
    label: 'Female'
  },
  {
    value: '3',
    label: 'Other'
  }
];

const states = [
  {
    value: undefined,
    label: 'None'
  },
  {
    value: '11',
    label: 'Florida'
  },
  {
    value: '22',
    label: 'Michigan'
  },
  {
    value: '33',
    label: 'Texas'
  }
];

const countries = [
  {
    value: null,
    label: 'None'
  },
  {
    value: '111',
    label: 'United States'
  },
  {
    value: '222',
    label: 'Italy'
  },
  {
    value: '333',
    label: 'Vietnam'
  }
];

export default function AddressForm(props) {
  const {
    formField: {
      members: [{
        telephoneNumber,
        role,
        formalFullName,
        familiarShortName,
        emails,
        dateOfBirth,
        sex,
        otherSexText,
        alternativeIdentifiers,
      }]

    }
  } = props;
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Member Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <InputField name={telephoneNumber.name} label={telephoneNumber.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={formalFullName.name} label={formalFullName.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField name={familiarShortName.name} label={familiarShortName.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField name={emails.name} label={emails.label} fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <DatePickerField
            name={dateOfBirth.name}
            label={dateOfBirth.label}
            format="dd/MM/yy"
            views={['year', 'month', 'date']}
            minDate={new Date()}
            maxDate={new Date('2050/12/31')}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <InputField name={emails.name} label={emails.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectField
            name={sex.name}
            label={sex.label}
            data={sexes}
            fullWidth
          />
        </Grid>
          <Grid item xs={12}>
          <InputField name={otherSexText.name} label={otherSexText.label} fullWidth />
        </Grid>
        
        <Grid item xs={12} sm={6}>
          <InputField name={alternativeIdentifiers.name} label={alternativeIdentifiers.label} fullWidth />
        </Grid>
       
      </Grid>
    </React.Fragment>
  );
}
