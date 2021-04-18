import React, { useState, useEffect } from 'react';

import {useLocation} from "react-router-dom";
import {
  Divider,
  Button,
  Grid,

  TextField,
  CircularProgress,
} from '@material-ui/core';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { FieldArray, Form, Formik, getIn } from 'formik';
import * as Yup from 'yup';
import { DatePickerField, SelectField } from './FormFields';

const roles = [
  {
    value: undefined,
    label: 'None',
  },
  {
    value: '1',
    label: 'Member',
  },
  {
    value: '2',
    label: 'Admin',
  },
];

const sexes = [
  {
    value: '1',
    label: 'Male',
  },
  {
    value: '2',
    label: 'Female',
  },
  {
    value: '3',
    label: 'Other',
  },
];

const validationSchema = Yup.object().shape({
  people: Yup.array().of(
    Yup.object().shape({
      //   firstName: Yup.string().required('First name is required'),
      //   lastName: Yup.string().required('Last name is required'),
    })
  ),
});

const debug = false;

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  button: {
    margin: theme.spacing(1),
  },
  field: {
    margin: theme.spacing(1),
  },
}));

const MyForm = () => {
  const classes = useStyles();

     const url = 'http://localhost:4000/kyc/subscriberinfo?msisdn=0114959286'
  const flareurl = 'https://ci-dev-safaricom-eyrfchsuu4.flaredispatch.com/v1/memberships'
   const search = useLocation().search;
  const msisdn = new URLSearchParams(search).get('msisdn');

  console.log("#####" + msisdn);


  const [kycDetails, setkycDetails] = useState('');
  



const getKYCDetails = () => {
    axios
        .get(url)
        .then((response) => {
           setkycDetails(response.data);
           console.log(response.data); //prints the above json reults in console
        })
        .catch((error) => {
            console.log(" error", error);
        });
  };
  
  
  const registerUser = (formValues) => {
    console.log(formValues);
    axios
        .post(flareurl, formValues)
        .then((response) => {
           setkycDetails(response.data);
           console.log(response.data); //prints the above json reults in console
        })
        .catch((error) => {
            console.log(" error", error);
        });
};

  useEffect(() => {
    getKYCDetails();
  }, []);



  return kycDetails ? (
    <div className={classes.container}>
      <Formik
        initialValues={{
          members: [
            {
              id: Math.random(),
              telephoneNumber: '',
              role: '',
              formalFullName: '',
              familiarShortName: '',
              emails: '',
              dateOfBirth: '',
              sex: '',
              otherSexText: '',
              alternativeIdentifiers: '',
            },
          ],
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log('onSubmit', JSON.stringify(values, null, 2));
        }}
      >
        {({ values, touched, errors, handleChange, handleBlur, isValid }) => (
          <Form noValidate autoComplete="off">
            <FieldArray name="members">
              {({ push, remove }) => (
                <React.Fragment>
                  {values.members.map((p, index) => {
                  
                    const telephoneNumber = `members[${index}].telephoneNumber`;
                    const touchedTelephoneNumber = getIn(
                      touched,
                      telephoneNumber
                    );
                    const errorTelephoneNumber = getIn(errors, telephoneNumber);

                    const role = `members[${index}].role`;
                    const touchedRole = getIn(touched, role);
                    const errorRole = getIn(errors, role);

                    const formalFullName = `members[${index}].formalFullName`;
                    const touchedFormalFullName = getIn(
                      touched,
                      formalFullName
                    );
                    const errorFormalFullName = getIn(errors, formalFullName);

                    const familiarShortName = `members[${index}].familiarShortName`;
                    const touchedFamiliarShortName = getIn(
                      touched,
                      familiarShortName
                    );
                    const errorFamiliarShortName = getIn(
                      errors,
                      familiarShortName
                    );

                    const emails = `members[${index}].emails`;
                    const touchedEmails = getIn(touched, emails);
                    const errorEmails = getIn(errors, emails);

                    const dateOfBirth = `members[${index}].dateOfBirth`;
                    const touchedDateOfBirth = getIn(touched, dateOfBirth);
                    const errorDateOfBirth = getIn(errors, dateOfBirth);

                    const sex = `members[${index}].sex`;
                    const touchedSex = getIn(touched, sex);
                    const errorSex = getIn(errors, sex);

                    const otherSexText = `members[${index}].otherSexText`;
                    const touchedOtherSexText = getIn(touched, otherSexText);
                    const errorOtherSexText = getIn(errors, otherSexText);

                    const alternativeIdentifiers = `members[${index}].alternativeIdentifiers`;
                    const touchedAlternativeIdentifiers = getIn(
                      touched,
                      alternativeIdentifiers
                    );
                    const errorAlternativeIdentifiers = getIn(
                      errors,
                      alternativeIdentifiers
                    );

                    return (
                      // <div key={p.id}>
                      <React.Fragment key={ p.id}>
                        <Grid container spacing={3}>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              className={classes.field}
                              margin="normal"
                              label="Formal Full Name"
                              name={formalFullName}
                              value={p.formalFullName}
                              required
                              helperText={
                                touchedFormalFullName && errorFormalFullName
                                  ? errorFormalFullName
                                  : ''
                              }
                              error={Boolean(
                                touchedFormalFullName && errorFormalFullName
                              )}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              className={classes.field}
                              margin="normal"
                              label="Familiar Short Name"
                              name={familiarShortName}
                              value={p.familiarShortName}
                              required
                              helperText={
                                touchedFamiliarShortName &&
                                errorFamiliarShortName
                                  ? errorFamiliarShortName
                                  : ''
                              }
                              error={Boolean(
                                touchedFamiliarShortName &&
                                  errorFamiliarShortName
                              )}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              className={classes.field}
                              margin="normal"
                              label="Telephone Number"
                              name={telephoneNumber}
                              // defaultValue = {msisdn}
                              // {isLastStep ? 'Register' : 'Next'}
                              value={p.index === 0 ?  msisdn  :  p.telephoneNumber}
                              required
                              helperText={
                                touchedTelephoneNumber && errorTelephoneNumber
                                  ? errorTelephoneNumber
                                  : ''
                              }
                              error={Boolean(
                                touchedTelephoneNumber && errorTelephoneNumber
                              )}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <SelectField
                              name={role}
                              label="Role"
                              data={roles}
                              fullWidth
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              className={classes.field}
                              margin="normal"
                              label="Emails"
                              name={emails}
                              value={p.emails}
                              required
                              helperText={
                                touchedEmails && errorEmails ? errorEmails : ''
                              }
                              error={Boolean(touchedEmails && errorEmails)}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <DatePickerField
                              name={dateOfBirth}
                              label="Date Of Birth"
                              format="dd/MM/yy"
                              views={['year', 'month', 'date']}
                              fullWidth
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              className={classes.field}
                              margin="normal"
                              label="Alternative Identifiers"
                              name={alternativeIdentifiers}
                              value={p.alternativeIdentifiers}
                              required
                              helperText={
                                touchedAlternativeIdentifiers &&
                                errorAlternativeIdentifiers
                                  ? errorAlternativeIdentifiers
                                  : ''
                              }
                              error={Boolean(
                                touchedAlternativeIdentifiers &&
                                  errorAlternativeIdentifiers
                              )}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <SelectField
                              name={sex}
                              label="Gender"
                              data={sexes}
                              fullWidth
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              className={classes.field}
                              margin="normal"
                              label="Other Sex Text"
                              name={otherSexText}
                              value={p.otherSexText}
                              required
                              helperText={
                                touchedOtherSexText && errorOtherSexText
                                  ? errorOtherSexText
                                  : ''
                              }
                              error={Boolean(
                                touchedOtherSexText && errorOtherSexText
                              )}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <Button
                              className={classes.button}
                              margin="normal"
                              type="button"
                              color="secondary"
                              variant="outlined"
                              onClick={() => remove(index)}
                            >
                              Remove
                            </Button>
                          </Grid>
                        </Grid>
                  </React.Fragment>
                    );
                  })}
                  <Button
                    className={classes.button}
                    type="button"
                    variant="outlined"
                    onClick={() =>
                      push({
                        id: Math.random(),
                        telephoneNumber: '',
                        role: '',
                        formalFullName: '',
                        familiarShortName: '',
                        emails: '',
                        dateOfBirth: '',
                        sex: '',
                        otherSexText: '',
                        alternativeIdentifiers: '',
                      })
                    }
                  >
                    Add
                  </Button>
          </React.Fragment>
              )}
            </FieldArray>
            <Divider style={{ marginTop: 20, marginBottom: 20 }} />
            <Button
              className={classes.button}
              type="submit"
              color="primary"
              variant="contained"
              // disabled={!isValid || values.people.length === 0}
            >
              submit
            </Button>
            <Divider style={{ marginTop: 20, marginBottom: 20 }} />
            {debug && (
              <>
                <pre style={{ textAlign: 'left' }}>
                  <strong>Values</strong>
                  <br />
                  {JSON.stringify(values, null, 2)}
                </pre>
                <pre style={{ textAlign: 'left' }}>
                  <strong>Errors</strong>
                  <br />
                  {JSON.stringify(errors, null, 2)}
                </pre>
              </>
            )}
          </Form>
        )}
      </Formik>
    </div>
  ):<CircularProgress></CircularProgress>;
};

export default MyForm;
