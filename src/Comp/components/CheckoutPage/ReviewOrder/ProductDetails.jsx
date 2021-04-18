import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@material-ui/core';
import useStyles from './styles';

const products = [

];

function ProductDetails() {
  const classes = useStyles();
  return (
    <List disablePadding>
      {products.map(product => (
        <ListItem className={classes.listItem} key={product.name}>
          <ListItemText primary={product.name} secondary={product.desc} />
          <Typography variant="body2">{product.price}</Typography>
        </ListItem>
      ))}
      <ListItem className={classes.listItem}>
      
      </ListItem>
    </List>
  );
}

export default ProductDetails;
