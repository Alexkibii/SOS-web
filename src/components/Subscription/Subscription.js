import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';
import '../../styles.css';
import  MoreInformation  from './MoreInfoDialog';
import SosSnackbar from './PressedButton';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  }
}));

export default function Subscription() {
  const classes = useStyles();

  function test () {
    console.log('button pressed')
  }

  return (
    <div className={classes.root}>
  <Typography align="center" className="top">For immediate emergency rescue in a medical, fire, security, or roadside emergency,
     press/hold the SOS button.</Typography>
     {/* <div className='center'>
          <Fab color="red" disableRipple={false} onClick={test}>
        <Typography>SOS</Typography>
      </Fab>
     </div> */}
     <SosSnackbar />
       
     
    <Typography align="center" className="absolute">Emergency response powered by rescue co
                <MoreInformation />     

     </Typography>

     {/* Modal with more info on rescue co services */}
    </div>
  );
}

    
  