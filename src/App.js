import React from 'react';
import { Link as RouterLink } from "react-router-dom";

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import ProTip from './ProTip';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Create React App v4-beta example
        </Typography>
        <div>
          <h2>
            Click on one of the example components below
          </h2>
          <ul>
            <li> <RouterLink to="/HOCApiExample">{"HOCApiExamplePage"}</RouterLink></li>
            <li> <RouterLink to="/">{"HOME"}</RouterLink></li>
          </ul>
        </div>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
