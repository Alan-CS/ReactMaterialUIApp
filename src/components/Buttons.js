// Alan: This is the example at 
// https://material-ui.com/styles/basics/#higher-order-component-api

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = {
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
};

// ALAN: Changed this to accept a children prop so that button name can be passed by caller
// SEE: https://material-ui.com/styles/advanced/#withstyles
function HigherOrderComponent({ classes, children }) {
  return <Button className={classes.root}>{ children }</Button>;
}

HigherOrderComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HigherOrderComponent);