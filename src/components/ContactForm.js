import React from "react";

// @material-ui/core components
import Box from "@material-ui/core/Box";
import Button from '@material-ui/core/Button';
import Container from "@material-ui/core/Container";
import TextField from '@material-ui/core/TextField';
import {Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

import {Formik} from 'formik';
import * as Yup from 'yup';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  buttonDiv: {
    marginTop: '2em',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  paraText: {
    marginTop: '1.5em',
  }
}));

export default function ContactForm() {

  const classes = useStyles();

  const initialValues = {name: '', email: '', message: ''}
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    email: Yup.string().email().required('Required'),
    message: Yup.string().required('Required'),
  });

  const submitHandler = (values, {setSubmitting, resetForm}) => {
    setTimeout(() => {
      // alert(JSON.stringify(values, null, 2));
      alert("Your message has been sent. Thank you for contacting us!!")
      setSubmitting(false);
      resetForm();
    }, 400);
  };

  return (

    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h5" gutterBottom color="primary">
          Get in touch with us
        </Typography>
        <Typography className={classes.paraText} variant="body1" gutterBottom color="secondary">
          Please provide us the information below and we will get in touch with you at the earliest.
        </Typography>

        <Formik
          initialValues={initialValues}
          onSubmit={submitHandler}
          validationSchema={validationSchema}
        >
          {({
              dirty,
              errors,
              handleBlur,
              handleChange,
              handleReset,
              handleSubmit,
              isSubmitting,
              touched,
              values,
            }) => <form onSubmit={handleSubmit}>
            <Grid container>
              <Grid item xs={12} sm={6}>
                <TextField
                  className={classes.input}
                  error={errors.name && touched.name}
                  helperText={errors.name && touched.name && errors.name}
                  label="Your Name"
                  margin="normal"
                  name="name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.name}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  className={classes.input}
                  error={errors.email && touched.email}
                  helperText={errors.email && touched.email && errors.email}
                  label="Your Email"
                  margin="normal"
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className={classes.textarea}
                  error={errors.message && touched.message}
                  fullWidth
                  helperText={errors.message && touched.message && errors.message}
                  label="Your Message"
                  margin="normal"
                  name="message"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.message}
                />
              </Grid>
              <Grid item xs={12} sm={4} md={4}>
                <div className={classes.buttonDiv}>
                  <Button
                    color="secondary"
                    disabled={!dirty || isSubmitting}
                    onClick={handleReset}
                    type="button"
                    variant="contained"
                  >
                    Reset
                  </Button>
                </div>
              </Grid>
              <Grid item xs={12} sm={4} md={4}>
                <div className={classes.buttonDiv}>
                  <Button
                    color="primary"
                    disabled={isSubmitting}
                    type="submit"
                    variant="contained"
                  >
                    Send Message
                  </Button>
                </div>
              </Grid>
            </Grid>
          </form>
          }
        </Formik>
      </Box>
    </Container>
  );
}
