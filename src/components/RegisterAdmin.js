import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Grid, Typography } from '@material-ui/core';
import { InputField,  SelectField, DatePickerField } from '../Comp/components/FormFields';


import { useForm } from "react-hook-form";


// const cities = [
//   {
//     value: undefined,
//     label: 'None'
//   },
//   {
//     value: '1',
//     label: 'New York'
//   },
//   {
//     value: '2',
//     label: 'Chicago'
//   },
//   {
//     value: '3',
//     label: 'Saigon'
//   }
// ];

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

export default function RegisterAdmin(props) {


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


     const classes = useStyles();
  
//  const [indexes, setIndexes] = React.useState([]);
//   const [counter, setCounter] = React.useState(0);
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    console.log(data.body.FirstName);
  };

  // const addMember = () => {
  //   setIndexes(prevIndexes => [...prevIndexes, counter]);

  //   setCounter(prevCounter => prevCounter + 1);
  // };

  // const removeMember = index => () => {
  //   setIndexes(prevIndexes => [...prevIndexes.filter(item => item !== index)]);
  //   setCounter(prevCounter => prevCounter - 1);
  // };

  // const clearMembers = () => {
  //   setIndexes([]);
  // };

   return (
     <form onSubmit={handleSubmit(onSubmit)}>
{/* {indexes.map(index => { */}
  {/* //       const fieldName = `members[${index}]`;
          return ( */}
             <React.Fragment >      

      <Typography variant="h6" gutterBottom>
        Member Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <InputField name={telephoneNumber.name} label={telephoneNumber.label}  fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={formalFullName.name} label={formalFullName.label} fullWidth />
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
            <Grid item xs={12} sm={6}>
          <InputField name={otherSexText.name} label={otherSexText.label} fullWidth />
        </Grid>
        
        <Grid item xs={12} sm={6}>
          <InputField name={alternativeIdentifiers.name} label={alternativeIdentifiers.label} fullWidth />
        </Grid>
       
      </Grid>
        
        {/* <Grid item xs={12}>
          <Button variant="contained"
                  color="primary"
                  onClick={removeMember(index)}
                  className={classes.button}>
              Remove
          </Button>
      </Grid> */}
     </React.Fragment>
              
     
      {/* })} */}
{/*           
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
          </Button> */}
    
    </form>
  );
}

