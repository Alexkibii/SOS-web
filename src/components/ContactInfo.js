import React from 'react';
import { Field } from 'formik';
import { TextField } from 'formik-material-ui';
import { Typography } from '@material-ui/core';
import * as Yup from 'yup';

const ContactInformation = props => {
	return (
		<div>
			<Typography variant="h3" component="h1">
				Contact Information
			</Typography>
			<Field name="telephoneNumber" label="Telephone Number" component={TextField} />
            <Field name="role" label="Role" component={TextField} />
            <Field name="formalFullName" label="Formal Full Name" component={TextField} />
            <Field name="familiarShortName" label="Familiar Short Name" component={TextField} />
            <Field name="emails" label="Emails" component={TextField} />
            <Field name="dateOfBirth" label="Date Of Birth" component={TextField} />
            <Field name="sex" label="Sex" component={TextField} />
            <Field name="otherSexText" label="Other Sex Text" component={TextField} />
            <Field name="alternativeIdentifiers" label="Alternative Identifiers" component={TextField} />
		</div>
	);
};

ContactInformation.label = 'Contact Information';
ContactInformation.initialValues = {
    telephoneNumber: '',
      role:'',
      formalFullName: '',
      familiarShortName: '',
      emails: '',
      dateOfBirth: '',
      sex: '',
      otherSexText: '',
      alternativeIdentifiers: ''
};
ContactInformation.validationSchema = Yup.object().shape({

  telephoneNumber: Yup.string().required('Please enter your telephoneNumber'),
      role: Yup.string().required('Please enter your role'),
      formalFullName:Yup.string().required('Please enter your formalFullName'),
      familiarShortName: Yup.string().required('Please enter your familiarShortName'),
      emails: Yup.string().required('Please enter your  emails'),
      dateOfBirth: Yup.string().required('Please enter your dateOfBirth'),
      sex: Yup.string().required('Please enter your sex'),
      otherSexText: Yup.string().required('Please enter your otherSexText'),
      alternativeIdentifiers: Yup.string().required('Please enter your alternativeIdentifiers'),
});

export default ContactInformation;