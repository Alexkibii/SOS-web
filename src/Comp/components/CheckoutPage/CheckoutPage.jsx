import React, { useState, useEffect } from 'react';
import {useLocation} from "react-router-dom";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  CircularProgress
} from '@material-ui/core';
import { Formik, Form } from 'formik';
import axios from 'axios';
import AddressForm from './Forms/AddressForm';
import PaymentForm from './Forms/PaymentForm';
import ReviewOrder from './ReviewOrder';
import CheckoutSuccess from './CheckoutSuccess';
import validationSchema from './FormModel/validationSchema';
import checkoutFormModel from './FormModel/registerFormModel';

import formInitialValues from './FormModel/formInitialValues';

import useStyles from './styles';
import RegisterMember from '../../../components/RegisterMember';
import registerFormModel from './FormModel/registerFormModel';
import RegisterAdmin from '../../../components/RegisterAdmin';

const steps = ['Admin Details', 'Member Details',  'Confirm Details'];
const { formId, formField } = registerFormModel;



function _renderStepContent(step) {
  switch (step) {
    case 0:
      return <RegisterAdmin formField={formField} />;
        case 1:
      return <RegisterMember formField={formField} />;
    case 2:
      return <ReviewOrder formField={formField} />;

    default:
      return <div>Not Found</div>;
  }
}

export default function CheckoutPage(props) {
  const classes = useStyles();
 const { formValues } = props;
 
  // const {
  //   telephoneNumber,
  //   role,
  //   formalFullName,
  //   familiarShortName,
  //   emails,
  //   dateOfBirth,
  //   sex,
  //   otherSexText,
  //   alternativeIdentifiers
    
  // } = formValues;
    
   const search = useLocation().search;
  const msisdn = new URLSearchParams(search).get('msisdn');

   const url = 'http://localhost:4000/kyc/subscriberinfo?msisdn=0114959286'
  const flareurl = 'http://localhost:4000/subscribe'
  // console.log("#####" + msisdn);

  const [kycDetails, setkycDetails] = useState('');

// "FirstName": "SAMUEL",
//         "MiddleName": "MWANGI",
//         "LastName": "IRUNGU",

const getKYCDetails = () => {
    axios
        .get(url)
      .then((response) => {
          // const parsedResponse = JSON.parse(response.data);
        const data = response.data.body;
       // telephoneNumber = msisdn;
                //console.log(telephoneNumber);

        console.log(data);
          setkycDetails(data);
 
       
       
         console.log(kycDetails); //prints the above json reults in console
         // alert(JSON.stringify(kycDetails, null, 2));
        })
        .catch((error) => {
            console.log(" error", error);
        });
  };
  
  
  const registerUser = (values) => {
    console.log(values);
    axios
        .post(flareurl, values)
        .then((response) => {
           alert(JSON.stringify(response, null, 2));
           console.log(response.data); //prints the above json reults in console
        })
        .catch((error) => {
            console.log(" error", error);
        });
};

  useEffect(() => {
    getKYCDetails();
  }, []);

  const [activeStep, setActiveStep] = useState(0);
  const currentValidationSchema = validationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;

  function _sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function _submitForm(values, actions) {
    await _sleep(1000);
    alert(JSON.stringify(values, null, 2));
    registerUser(values);
    actions.setSubmitting(false);

    setActiveStep(activeStep + 1);
  }

  function _handleSubmit(values, actions) {
    if (isLastStep) {
      _submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  }

  function _handleBack() {
    setActiveStep(activeStep - 1);
  }

  return kycDetails ? (
    <React.Fragment>
      <Typography component="h1" variant="h4" align="center">
       Register
      </Typography>
      <Stepper activeStep={activeStep} className={classes.stepper}>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <React.Fragment>
        {activeStep === steps.length ? (
          <CheckoutSuccess />
        ) : (
          <Formik
            initialValues={formInitialValues}
            validationSchema={currentValidationSchema}
            onSubmit={_handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form id={formId}>
                {_renderStepContent(activeStep)}

                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={_handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <div className={classes.wrapper}>
                    <Button
                      disabled={isSubmitting}
                      type="submit"
                      variant="contained"
                      color="primary"
                      className={classes.button}
                    >
                      {isLastStep ? 'Register' : 'Next'}
                    </Button>
                    {isSubmitting && (
                      <CircularProgress
                        size={24}
                        className={classes.buttonProgress}
                      />
                    )}
                  </div>
                  </div>
                 
              </Form>
            )}
          </Formik>
        )}
      </React.Fragment>
    </React.Fragment>
  ):<CircularProgress>Loading</CircularProgress>
}
