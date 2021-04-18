import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import axios from 'axios';
import { CircularProgress, Grid, Typography } from '@material-ui/core';
import { InputField, DatePickerField, CheckboxField, SelectField } from '../../FormFields';
import RadioField from '../../FormFields/RadioField';
import MomentUtils from "@date-io/moment";
import moment from "moment";



const sexes = [
 
  {
    value: '0',
    label: 'Male'
  },
  {
    value: '1',
    label: 'Female'
  },
  {
    value: '2',
    label: 'Other'
  }
];

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

const roles = [
  {
    value: undefined,
    label: 'None'
  },
  {
    value: '11',
    label: 'Admin'
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
    telephoneNumber,
    role,
    formalFullName,
    familiarShortName,
    emails,
    dateOfBirth,
    sex,
    otherSexText,
    alternativeIdentifiers,
      
    }
  } = props;


    const url = 'http://localhost:4000/kyc/subscriberinfo?msisdn=0114959286'
  const flareurl = 'https://ci-dev-safaricom-eyrfchsuu4.flaredispatch.com/v1/memberships'
   const search = useLocation().search;
  const msisdn = new URLSearchParams(search).get('msisdn');


  console.log("#####" + msisdn);

  const [fullname, setFullname] = useState('');
  const [dateofBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('');
  const [idNumber, setIdNumber] = useState('');


    const [selectedDate, setDate] = useState(moment());
  const [inputValue, setInputValue] = useState(moment().format("DD-MM-YYYY"));

  const onDateChange = (date, value) => {
    setDate(date);
    setInputValue(value);
  };

  const dateFormatter = str => {
    return str;
  };


const getKYCDetails = () => {
    axios
        .get(url)
        .then((response) => {
         // setkycDetails(response.data);
          const telephoneNumber = msisdn;
          console.log(response.data.body.FirstName); //prints the above json reults in console
          
           setFullname ( response.data.body.FirstName + ' ' + response.data.body.MiddleName + ' ' + response.data.body.LastName);
          setDateOfBirth(response.data.body.Birthday);
          setGender(response.data.body.Gender);
             setIdNumber(response.data.body.IDNumber);
        
        })
        .catch((error) => {
            console.log(" error", error);
        });
  };
  
//   Birthday: "29-09-1992"
// FirstName: "SAMUEL"
// Gender: "M"
// IDNumber: "293498055"
// IDType: "Passport"
// LastName: "IRUNGU"
// MiddleName: "MWANGI"
// Nationality: null
// Title: "M"
// customerStatus: "idle"
// customerType: "Prepaid"
// registrationDate: null
// tariff: 150200
  
  const registerUser = (formValues) => {
    console.log(formValues);
    axios
        .post(flareurl, formValues)
        .then((response) => {
       
           console.log(response); //prints the above json reults in console
        })
        .catch((error) => {
            console.log(" error", error);
        });
};

  useEffect(() => {
    getKYCDetails();
  }, []);



  

  return fullname ? (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Admin Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <InputField name={telephoneNumber.name} value={msisdn} label={telephoneNumber.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={formalFullName.name} value={ fullname}  label={formalFullName.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={familiarShortName.name} label={familiarShortName.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={emails.name} label={emails.label} fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <DatePickerField
            name={dateOfBirth.name}
            label={dateOfBirth.label}
             autoOk={true}
         
          value={selectedDate}
          
         
          onChange={onDateChange}
            inputValue={ dateofBirth}
            format="dd-MM-yyyy"
            views={['year', 'month', 'date']}
        
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <InputField name={emails.name} label={emails.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <RadioField
            name={sex.name}
            label={sex.label}
            data={sexes}
            value={ gender}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectField
            name={role.name}
            label={role.label}
            value={"Admin" }
            data={roles}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={otherSexText.name} label={otherSexText.label} fullWidth />
        </Grid>
        
        <Grid item xs={12} sm={6}>
          <InputField name={alternativeIdentifiers.name} value={idNumber} label={alternativeIdentifiers.label} fullWidth />
        </Grid>
       
      </Grid>
        
      {/* <Grid item xs={12}>
          <Button variant="contained"
                  color="primary"
                  onClick={removeMember(index)}
                  className={classes.button}>
              Remove
          </Button>
      </Grid>
     </React.Fragment>
              
        );
      })}
          
          <Button variant="contained"
              color="primary"
              onClick={addMember}
              className={classes.button}>
              Add Member
          </Button>
      
          <Button variant="contained"
              color="primary"
              onClick={clearMembers}
              className={classes.button}>
             Clear Members
          </Button>
     */}
    </React.Fragment>
   ):<CircularProgress></CircularProgress>
}
