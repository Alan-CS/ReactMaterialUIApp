import React from "react";

import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Container from "@material-ui/core/Container";
import {Grid, Typography} from "@material-ui/core";

import data from "../db";

function Contact(id, image, firstname, lastname, address, city, country, email) {
  return (
    <Grid item key={id}>
      <Card>
        <CardActionArea>
          <CardMedia
            height="30"
            width="20"
            image={image}
            alt={firstname + " " + lastname}
            title={firstname + " " + lastname}
            component="img"
          />
          <CardContent>
            <Typography variant="h5" component="h2" gutterBottom>
              {firstname + " " + lastname}
            </Typography>
            <Typography variant="h8" component="h2" gutterBottom>
              {address}
            </Typography>
            <Typography variant="h8" component="h2" gutterBottom>
              {city}
            </Typography>
            <Typography variant="h8" component="h2" gutterBottom>
              {country}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button color="primary" size="small">
            Edit
          </Button>
          <Button color="primary" size="small">
            View
          </Button>
          <Button color="primary" size="small">
            Send Email
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default function Contacts() {
  const contacts = data.contacts || [];
  // console.log("Contacts = ", contacts);
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h5" gutterBottom color="primary">
          Contact List
        </Typography>
        <div style={{padding: 40, marginTop: 30,}}>
          <Grid container spacing={45} justify="center">
            {contacts.map(contact => (
              <Contact {...contact} />
            ))}
          </Grid>
        </div>
      </Box>
    </Container>
  );
}
