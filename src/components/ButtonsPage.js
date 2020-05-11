import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';

// import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

import Buttons from './Buttons';
import {Theme as theme} from "@material-ui/core/styles/createMuiTheme";

// Taken from https://material-ui.com/styles/basics/#hook-api
const useStyles = makeStyles((theme) => ({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  topDiv: {
    marginTop: theme.spacing(2)
  }
}));

export default function () {
  const classes = useStyles();
  console.log("HOCApiExamplePage called..");

  return (
    <Container maxWidth="sm">
      <div className={classes.topDiv}>
        <h1>Sample Buttons</h1>
      </div>

      {/*Alan: cannot prevent underlining*/}
      <Button className={classes.root}>
          <Link variant="body2" underline="none" to="/">{"Home"}</Link>
      </Button>
        <br>
        </br>
        <br>
        </br>

        <br>
        </br>
        <br>
        </br>
        <Buttons> Standard Button </Buttons>
    </Container>
  )
}
