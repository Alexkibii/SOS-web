// import React from 'react';
// import Button from '@material-ui/core/Button';
// import Snackbar from '@material-ui/core/Snackbar';
// import MuiAlert from '@material-ui/lab/Alert';
// import { makeStyles } from '@material-ui/core/styles';
// import Fab from '@material-ui/core/Fab';
// import '../../styles.css';
// import Typography from '@material-ui/core/Typography';



// function Alert(props) {
//   return <MuiAlert elevation={6} variant="filled" {...props} />;
// }

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//     '& > * + *': {
//       marginTop: theme.spacing(2),
//     },
//   },
// }));

// export default function SosSnackbar() {
//   const classes = useStyles();
  
//   const [state, setState] = React.useState({
//     open: false,
//     vertical: 'top',
//     horizontal: 'center',
//   });

//   const { vertical, horizontal, open } = state;

//   const handleClick = (newState) => () => {
//     setState({ open: true, ...newState });
//   };

//   const handleClose = () => {
//     setState({ ...state, open: false });
//   };


// //   const [open, setOpen] = React.useState(false);

// //   const handleClick = () => {
// //     setOpen(true);
// //   };

// //   const handleClose = (event, reason) => {
// //     if (reason === 'clickaway') {
// //       return;
// //     }

// //     setOpen(false);
//   };

//   return (
//     <div className={classes.root}>
//       {/* <Button variant="outlined" onClick={handleClick}>
//         Open success snackbar
//       </Button> */}
//       <div className='center'>
//           <Fab color="red" disableRipple={false} onClick={handleClick({ vertical: 'top', horizontal: 'center' })}>
//         <Typography>SOS</Typography>
//       </Fab>
//      </div>
//       <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical, horizontal }} key={vertical + horizontal}>
//         <Alert onClose={handleClose} severity="error">
//           This is an error message
//         </Alert>
//       </Snackbar>
//       {/* <Alert severity="error">This is an error message!</Alert>
//       <Alert severity="warning">This is a warning message!</Alert>
//       <Alert severity="info">This is an information message!</Alert>
//       <Alert severity="success">This is a success message!</Alert> */}
//     </div>
//   );
// }

import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Fab from '@material-ui/core/Fab';
import '../../styles.css';
import Typography from '@material-ui/core/Typography';


export default function SosSnackbar() {
  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });

  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const buttons = (
    <React.Fragment>
      {/* <Button onClick={handleClick({ vertical: 'top', horizontal: 'center' })}> */}
          <div className='center'>
          <Fab color="red" disableRipple={false} onClick={handleClick({ vertical: 'top', horizontal: 'center' })}>
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
        bodyStyle={{ height: 200, flexGrow: 0 }}
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message="SOS Message"
        severity="error"
        key={vertical + horizontal}
      />
    </div>
  );
}

