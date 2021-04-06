import React from 'react';
import Helmet from 'react-helmet';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import FetchContacts from './FetchContacts';
import FetchDependants from './FetchDependants';
import SubscriberDetails from './SubscriberDetails';

const useStyles = makeStyles(theme => ({
  margin: {
    paddingTop: theme.spacing(3),
    textAlign: 'center'
  }
}));

export default function SignIn() {
   const classes = useStyles();

    return (
       <Box className={classes.margin}>
      <Helmet>
        <title>Sign In</title>
      </Helmet>
      <Grid container spacing={2}>
        <Grid item xs={8} sm={4}>
            <>
              {/* {"Customer":{
"msisdn":"254711965521",
"active":true,
"createdAt":"10/09/2012",
"updatedAt":"10/09/2012",
"subscription":"Gold",
"membershipLabel":"Principle",
"emergencyContact":[{
"firstName":true,
"lastName":"254711965521",
"otherNames":"254711965521",
"relationship":"254711965521",
"phoneNumbers":["07119877654","07119877654"]

}],
"dependants":[{},{}]


}
} */}
             <Typography variant="h6">SUBSCRIBER DETAILS</Typography>
             <SubscriberDetails/>
         </>
        </Grid>
        <Grid item xs={8} sm={4}>
        <>
            <Typography variant="h6">EMERGENCY CONTACT</Typography>
            <FetchContacts />
        </>
        </Grid>
         <Grid item xs={8} sm={4}>
            <>
            <Typography variant="h6">EMERGENCY CONTACT</Typography>
            <FetchDependants />
            </>             
        </Grid> 
      </Grid>
    </Box>
  );
}