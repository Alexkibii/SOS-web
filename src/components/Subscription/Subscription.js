import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';
import '../../styles.css';
import  MoreInformation  from './MoreInfoDialog';

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

  return (
    <div className={classes.root}>
  <Typography>For immediate emergency rescue in a medical, fire, security, or roadside emergency,
     press/hold the SOS button.</Typography>
     <div className='center'>
          <Fab color="red" disableRipple={false}>
        <Typography>SOS</Typography>
      </Fab>
     </div>
       
     
    <Typography>Emergency response powered by rescue co
                <MoreInformation />     

     </Typography>

     {/* Modal with more info on rescue co services */}
    </div>
  );
}

    
  