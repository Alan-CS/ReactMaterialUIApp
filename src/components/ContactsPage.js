import React from "react";

import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import {Grid, Typography} from "@material-ui/core";

import Contact from "./Contact"
import data from "../db";

export default function Contacts() {

  const contacts = data.contacts || [];
  // console.log("Contacts = ", contacts);

  /*
     Below: <Box> exists only to add Y margin (as is also done on the other pages for consistency.
     Otherwise, you can remove <Box> and possibly use style={{marginTop: '2em'}} on Container
  */
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h5" gutterBottom color="primary">
          Contact List
        </Typography>
        <Grid style={{marginTop: 20}} container spacing={4}>
          {contacts.map(contact => (
            <Grid item xs={12} sm={6} key={contact.id}>
              <Contact {...contact} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
