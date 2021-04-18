import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';
import logo from '../../../rescue.png';

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar position="absolute" color="default" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap>
      <img className="image" src={logo} alt="Logo" /> 
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
