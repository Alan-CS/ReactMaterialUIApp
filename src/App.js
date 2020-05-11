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
        {/*No text here*/}
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
        <Typography variant="h4" component="h1" gutterBottom color="primary">
          A Material-UI based React App
        </Typography>
        <Typography color="textSecondary">
          <div>
            <h3>
              This app has the following features
            </h3>
            <ul>
              <li> It is Create React App based </li>
              <li> It is built using the Material-UI toolkit</li>
              <li> It does routing using React Router </li>
              <li> It does forms validation using Formik forms </li>
              <li> It also uses YUP for driving forms validation logic </li>
            </ul>
          </div>
        </Typography>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
