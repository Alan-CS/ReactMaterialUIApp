import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from './ProTip';

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h5" gutterBottom  color="primary">
          A Material-UI based React App
        </Typography>
        <Typography style={{marginTop: '1em'}} variant="h6" color="textSecondary">
              This app has the following features
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
            <ul>
              <li> It is based on Create React App </li>
              <li> It is built using the Material-UI toolkit</li>
              <li> It does routing using React Router </li>
              <li> It does forms validation using Formik forms </li>
              <li> It also uses YUP for driving forms validation logic </li>
            </ul>
        </Typography>
        <ProTip />
      </Box>
    </Container>
  );
}
