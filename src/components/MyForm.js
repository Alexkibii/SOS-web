import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
 import moment from "moment";




import {
  Divider,
  Button,
  Grid,
  Typography,
  CircularProgress,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { InputField, SelectField, DatePickerField } from './FormFields';
import { FieldArray, Form, Field, Formik, getIn, useFormikContext } from 'formik';

import * as Yup from 'yup';
import FormikRadioGroup from './FormFields/FormikRadioGroup';



const roles = [
  ,
  {
    value: 'ADMIN',
    label: 'Admin',
  },
  {
    value: 'MEMBER',
    label: 'Member',
  },
];

  const options = [
    { value: "MALE", label: "Male" },
    { value: "FEMALE", label: "Female" },
    { value: "OTHER", label: "Other" }
  ];


const validationSchema = Yup.object().shape({
  people: Yup.array().of(
    Yup.object().shape({
      formalFullName: Yup.string().required('First name is required'),
      familiarShortName: Yup.string().required('Last name is required'),
      emails: Yup.array().required('Email is required'),
    })
  ),
});

const debug = true;

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

const MyForm = (props) => {
  const classes = useStyles();
  const registerurl = 'http://localhost:4000/subscribe';
  const flareurl =
    'https://ci-dev-safaricom-eyrfchsuu4.flaredispatch.com/v1/memberships';
  const search = useLocation().search;
  const msisdn = new URLSearchParams(search).get('msisdn');

  console.log('#####' + msisdn);


  const [fullName, setFullName] = useState('');
  const [IDNumber, setIDNumber] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('FEMALE');

  const registerUser = (values) => {
    // console.log(values);
    axios
      .post(registerurl, values)
      .then((response) => {
    
        console.log(response.data); //prints the above json reults in console
      })
      .catch((error) => {
        console.log(' error', error);
      });
  };

 

  const [url, setUrl] = useState(
    'http://localhost:4000/kyc/subscriberinfo?msisdn=0114959286'
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await axios(url);

 
        const fullNames =
          result.data.body.FirstName +
          ' ' +
          result.data.body.MiddleName +
          ' ' +
          result.data.body.LastName;

        if (result.data.body.Gender === 'M') {
          setGender('MALE');
        } else if (result.data.body.Gender === 'F') {
          setGender('FEMALE');
        } else { setGender('OTHER'); }
       
        setFullName(fullNames);
        const id = result.data.body.IDNumber;
        setIDNumber(id);
        const dobs = result.data.body.Birthday;
        console.log(dobs);
           

             console.log('NEWS-DATE',moment(dobs, 'DD-MM-YYYY').format('YYYY-MM-DD'))
 

       setDob( moment(dobs, 'DD-MM-YYYY').format('YYYY-MM-DD'));
  
      } catch (error) {
        console.log('Error ',error);
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [url]);




  return isLoading ? (
    <CircularProgress></CircularProgress>
  ) : isError ? (
    <div>Something went wrong ...</div>
  ) : (
    <div className={classes.container}>
      <Formik
            initialValues={{
            policyName: "SAFARICOM_HOUSEHOLD",
          members: [
            {
              formalFullName: fullName,
              familiarShortName: '',
              telephoneNumber: msisdn,
              role: 'ADMIN',
              emails: [],
              dateOfBirth: dob,
              sex: gender,
          
              otherSexText: 'N/A',
              alternativeIdentifiers:[IDNumber] ,
            },
          ],
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          // alert(JSON.stringify(values, null, 2));
          registerUser(values);
        }}
      >
        {({isSubmitting,  values, touched, setFieldValue,  errors, handleChange, handleBlur, isValid }) => (
          <Form autoComplete="off">
            <FieldArray name="members">
              {({ push, remove }) => (
                <div>
                      {values.members.map((p, index) => {
                        console.log("####Values",values);
                    const formalFullName = `members[${index}].formalFullName`;
                    const touchedformalFullName = getIn(
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

                    const telephoneNumber = `members[${index}].telephoneNumber`;
                    const touchedTelephoneNumber = getIn(
                      touched,
                      telephoneNumber
                    );
                    const errorTelephoneNumber = getIn(errors, telephoneNumber);

                    const role = `members[${index}].role`;
                    const touchedRole = getIn(touched, role);
                    const errorRole = getIn(errors, role);

                    const email = `members[${index}].emails`;
                    const touchedEmails = getIn(touched, email);
                    const errorEmails = getIn(errors, email);

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
                      <div key={p.index}>
                        <Typography component="h1" variant="h4" align="center">
                          New Member {p.index}
                        </Typography>
                        <Grid container spacing={3}>
                          <Grid item xs={12} sm={6}>
                            <InputField
                              name={formalFullName}
                              value={p.formalFullName}
                              label="Formal Full Name"
                              fullWidth
                              required
                              helperText={
                                touchedformalFullName && errorFormalFullName
                                  ? errorFormalFullName
                                  : ''
                              }
                              error={Boolean(
                                touchedformalFullName && errorFormalFullName
                              )}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <InputField
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
                              fullWidth
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <InputField
                              label="Telephone Number"
                              name={telephoneNumber}
                              value={p.telephoneNumber}
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
                              fullWidth
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <SelectField
                              label="Role"
                              name={role}
                              value={p.role}
                              required
                              // helperText={
                              //   touchedRole && errorRole ? errorRole : ''
                              // }
                              error={Boolean(touchedRole && errorRole)}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              data={roles}
                              fullWidth
                            />
                          </Grid>

                          <Grid item xs={12} sm={6}>
                               <FieldArray
                              
                              name={`members.${index}.emails`}
             render={arrayHelpers => (
               <div>
                 {values.members[index].emails && values.members[index].emails.length > 0 ? (
                values.members[index].emails.map((mail, i) => (
                     <div key={mail.i}>
                       
                            <InputField
                              label="Email Address"
                              name={`members.${index}.emails.${i}`}
                              value={mail.emails}
                              required
                              helperText={
                                touchedEmails && errorEmails
                                  ? errorEmails
                                  : ''
                              }
                              error={Boolean(
                                touchedEmails && errorEmails
                              )}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              fullWidth
                            />
                       <button
                         type="button"
                         onClick={() => arrayHelpers.remove(i)} // remove a friend from the list
                       >
                         -
                       </button>
                       <button
                         type="button"
                         onClick={() => arrayHelpers.push( '')} // insert an empty string at a position
                       >
                         +
                       </button>
                     </div>
                   ))
                 ) : (
                   <button type="button" onClick={() => arrayHelpers.push('')}>
                     {/* show this when user has removed all friends from the list */}
                     Add Email
                   </button>
                 )}
                
               </div>
             )}
           />
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <DatePickerField
                              label="Date Of Birth"
                              name={dateOfBirth}
                              value={p.dateOfBirth}
                              required
                              helperText={
                                touchedDateOfBirth && errorDateOfBirth
                                  ? errorDateOfBirth
                                  : ''
                              }
                              error={Boolean(
                                touchedDateOfBirth && errorDateOfBirth
                              )}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              format="yyyy-MM-dd"
                              views={['year', 'month', 'date']}
                              minDate={new Date('1900-01-01')}
                              maxDate={new Date()}
                              fullWidth
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                           
      <Field
               
            name={sex}
            component={FormikRadioGroup}
            options={options}
          />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <InputField
                              label="Other Sex Text"
                              name={otherSexText}
                              value={p.otherSexText}
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
                              fullWidth
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <InputField
                              label="Alternative Identifiers"
                              name={alternativeIdentifiers}
                              value={p.alternativeIdentifiers}
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
                              fullWidth
                            />
                          </Grid>
                        </Grid>
                        <Button
                          className={classes.button}
                          margin="normal"
                          type="button"
                          color="primary"
                          variant="contained"
                          onClick={() => remove(index)}
                        >
                          Remove Member
                        </Button>
                      </div>
                    );
                  })}
                  <Button
                    className={classes.button}
                    type="button"
                   color="primary"
              variant="contained"
                    onClick={() =>
                      push({
                        formalFullName: '',
                        familiarShortName: '',
                        telephoneNumber: '',
                        role: '',
                        emails: [],
                        dateOfBirth: '',
                        sex: '',
                        otherSexText: '',
                        alternativeIdentifiers: '',
                      })
                    }
                  >
                    Add Member
                  </Button>
                </div>
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
            {/* {debug && (
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
            )} */}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MyForm;
