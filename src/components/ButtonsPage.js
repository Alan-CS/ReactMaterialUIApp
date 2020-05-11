import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';

// import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

import HOCApiExample from './HOCApiExample';

// Taken from https://material-ui.com/styles/basics/#hook-api
const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});

export default function () {
  const classes = useStyles();
  console.log("HOCApiExamplePage called..");

  return (
    <Container maxWidth="sm">
      <Button className={classes.root}>
          <Link to="/">{"Home"}</Link>
      </Button>
        <br>
        </br>
        <br>
        </br>
        <div>
          Test Div
        </div>
        <br>
        </br>
        <br>
        </br>
        <HOCApiExample> Alan Button </HOCApiExample>
    </Container>
  )
}
