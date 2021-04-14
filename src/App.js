import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {useLocation} from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import logo from './rescue.png'; // Tell webpack this JS file uses this image
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import VehicleDetails from './components/VehicleDetails';
import RegisterMember from './components/RegisterMember';
import RegisterAdmin from './components/RegisterAdmin';


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

const steps = ['Admin Details', 'Member Details', 'Vehicle Details'];


function App() {
   

  const classes = useStyles();

  const url = 'http://localhost:4000/kyc/subscriberinfo?msisdn=0114959286'
  const flareurl = 'https://ci-dev-safaricom-eyrfchsuu4.flaredispatch.com/v1/memberships'
   const search = useLocation().search;
  const msisdn = new URLSearchParams(search).get('msisdn');

  // console.log("#####" + msisdn);

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



 
  const [activeStep, setActiveStep] = useState(0);

  const [formValues, setFormValues] = useState({
    admin: {

      telephoneNumber: msisdn,
      role:"ADMIN",
      formalFullName: '',
      familiarShortName: '',
      emails: '',
      dateOfBirth: '',
      sex: '',
      otherSexText: '',
      alternativeIdentifiers: ''

    },
    members: [{
      telephoneNumber: '',
      role:"MEMBER",
      formalFullName: '',
      familiarShortName: '',
      emails: '',
      dateOfBirth: '',
      sex: '',
      otherSexText: '',
      alternativeIdentifiers: ''

    }],
    vehicle: {
        licensePlate: '',
        make: '',
        model:'',
        color: '',
        manufacturingYear:'',
        alternativeIdentifiers:''
    }
  });
  

  const handleNext = (newValues) => {
    setFormValues({ ...formValues, ...newValues });
    console.log(formValues);
    setActiveStep(activeStep + 1);
   
  };

  const handleBack = (newValues) => {
    setFormValues({ ...formValues, ...newValues });
    setActiveStep(activeStep - 1);
  };

   function getStepContent(step) {
    const isLastStep = (activeStep === steps.length - 1);
    switch (step) {
      case 0:
        return <RegisterAdmin formValues={kycDetails} activeStep={activeStep} isLastStep={isLastStep} handleBack={handleBack} handleNext={handleNext}/>;
      case 1:
        return <RegisterMember {...formValues} activeStep={activeStep} isLastStep={isLastStep} handleBack={handleBack} handleNext={handleNext}/>;
      case 2:
        return <VehicleDetails {...formValues} activeStep={activeStep} isLastStep={isLastStep} handleBack={handleBack} handleNext={handleNext}/>;
      
      default:
        throw new Error('Unknown step');
    }
  }

  return kycDetails ? (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <img className= {classes.img} src={logo} alt="Logo" />
        
        </Toolbar>
      </AppBar>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Registration
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your registration.
                </Typography>
                <Typography variant="subtitle1">
                  Your registration to Flare SOS Emergency Call is successfull.  We have emailed your order confirmation, and will
                  send you an update when your order has shipped.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button variant="contained"
                    color="primary" onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                      onClick= {handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Subscribe' : 'Next'}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
   
      </main>
    </React.Fragment>
  ):<div>Loading data....</div>;
}
export default App;
