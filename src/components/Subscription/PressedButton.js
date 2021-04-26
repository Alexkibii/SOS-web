import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Fab from '@material-ui/core/Fab';
import '../../styles.css';
import Typography from '@material-ui/core/Typography';
import MuiAlert from '@material-ui/lab/Alert';
import Timer from '../Timer/Timer';



export default function SosSnackbar() {
  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });

  function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const text = () => {
    <Typography>Test</Typography>
  }

  const buttons = (
    <React.Fragment>
      {/* <Button onClick={handleClick({ vertical: 'top', horizontal: 'center' })}> */}
          <div className='center'>
          <Fab disableRipple={false} onClick={handleClick({ vertical: 'top', horizontal: 'center' })}>
        <Typography>SOS</Typography>
      </Fab>
     </div>
      {/* </Button> */}
     
    </React.Fragment>
  );

  return (
    <div>
      {buttons}
      <Snackbar
        bodystyle={{ height: 300, flexGrow: 0 }}
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        key={vertical + horizontal}>
          <Alert onClose={handleClose}  severity="error">
    <Timer />
  </Alert>
        </Snackbar>
    </div>
  );
}

