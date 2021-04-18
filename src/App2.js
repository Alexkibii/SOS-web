import React, { Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Form, Formik } from 'formik';
import { Button, Step, StepLabel, Stepper } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import SwipeableViews from 'react-swipeable-views';
import ContactInformation from './components/ContactInfo'
import OrgInformation from './components/OrgInformation'
import RegisterAdmin from './components/RegisterAdmin';
import RegisterMember from './components/RegisterMember';


const steps = [ContactInformation, OrgInformation];

const useStyles = makeStyles((theme) => ({
  palette: {
    primary: {
      main: "#0d8bcd",
    },
  },
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


const App = props => {
    const classes = useStyles();
	const [activeStep, setActiveStep] = useState(0);

	const isLastStep = () => {
		return activeStep === steps.length - 1;
	};

	const handlePrev = () => {
		setActiveStep(Math.max(activeStep - 1, 0));
	};

	const handleNext = () => [
		setActiveStep(Math.min(activeStep + 1, steps.length - 1))
	];

	const onSubmit = (values, formikBag) => {
		const { setSubmitting } = formikBag;

		if (!isLastStep()) {
			setSubmitting(false);
			handleNext();
			return;
		}

		console.log(values);

		setTimeout(() => {
			setSubmitting(false);
		}, 1000);
	};

	const initialValues = steps.reduce(
		(values, { initialValues }) => ({
			...values,
			...initialValues
		}),
		{}
	);
	const ActiveStep = steps[activeStep];
  const validationSchema = ActiveStep.validationSchema;
  
  //    function getStepContent(step) {
  //   const isLastStep = (activeStep === steps.length - 1);
  //   switch (step) {
  //     case 0:
  //       return <RegisterAdmin {...formValues} data = {kycDetails} activeStep={activeStep} isLastStep={isLastStep} handleBack={handlePrev} handleNext={handleNext}/>;
  //     case 1:
  //       return <VehicleDetails {...formValues} activeStep={activeStep} isLastStep={isLastStep} handleBack={handlePrev} handleNext={handleNext}/>;
  //     case 2:
  //       return <VehicleDetails {...formValues} activeStep={activeStep} isLastStep={isLastStep} handleBack={handlePrev} handleNext={handleNext}/>;
      
  //     default:
  //       throw new Error('Unknown step');
  //   }
  // }

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={onSubmit}
			validationSchema={validationSchema}
		>
			{({ isSubmitting, touched, values }) => (
				<>
          <Form>
            <Stepper alternativeLabel activeStep={activeStep} className={classes.stepper}>
          {steps.map((step, index) => (
								<Step key={index}>
									<StepLabel>{steps[index].label}</StepLabel>
								</Step>
							))}
          </Stepper>
{/*            
						<Stepper alternativeLabel activeStep={activeStep}>
							{steps.map((step, index) => (
								<Step key={index}>
									<StepLabel>{steps[index].label}</StepLabel>
								</Step>
							))}
						</Stepper> */}
            {/* {getStepContent(activeStep)} */}
				
						<SwipeableViews index={activeStep}>
							{steps.map((step, index) => {
								const Component = steps[index];
								return <Component key={index} />;
							})}
            </SwipeableViews>
            		<Button
							disabled={activeStep === 0 || isSubmitting}
							onClick={handlePrev}
						>
							Previous
						</Button>
						<Button disabled={isSubmitting} type="submit">
							{isLastStep() ? 'Submit' : 'Next'}
						</Button>
					</Form>
				
				</>
			)}
		</Formik>
	);
};

export default App;