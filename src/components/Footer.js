import React from 'react';
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

export default function Footer() {
  return (
    <Typography style={{marginTop: '6em'}}variant="body2" color="textSecondary" align="center">
      <hr style={{width: '80%'}}/>
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        {/*No text here*/}
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
