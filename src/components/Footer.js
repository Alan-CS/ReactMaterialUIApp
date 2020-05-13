import React from 'react';
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

export default function Footer() {
  return (
    <>
      <hr style={{width: '80%', marginTop: '6em'}}/>
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Open Source
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </>
  );
}
