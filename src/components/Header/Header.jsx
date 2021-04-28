import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import logo from '../../rescue.png'; // Tell webpack this JS file uses this image
import useStyles from './styles';

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar position="absolute" color="default" className={classes.appBar}>
      <Toolbar>
           <img className="image" src={logo} alt="Logo" />  
      
      </Toolbar>
    </AppBar>
  );
}
