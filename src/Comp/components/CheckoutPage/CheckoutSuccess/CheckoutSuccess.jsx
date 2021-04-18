import React from 'react';
import { Typography } from '@material-ui/core';

function CheckoutSuccess() {
  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
       Registration Success.
      </Typography>
      <Typography variant="subtitle1">
        Registration is complete. You will receive email after subscription is approved.
      </Typography>
    </React.Fragment>
  );
}

export default CheckoutSuccess;
