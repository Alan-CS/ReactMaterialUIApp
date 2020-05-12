import React, {useState} from "react";

// @material-ui/core components
import Box from "@material-ui/core/Box";
import Button from '@material-ui/core/Button';
import Container from "@material-ui/core/Container";
import TextField from '@material-ui/core/TextField';
import {Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

import { ErrorMessage, Field, Formik, Form } from 'formik';
import * as Yup from 'yup';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));


export default function ContactForm() {

  const classes = useStyles();

  const initialValues = {name: '', email: '', message: ''}
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    email: Yup.string().email().required('Required'),
    message: Yup.string().required('Required'),
    });

  const submitHandler = (values, {setSubmitting}) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (

    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h5" gutterBottom color="primary">
          Get in touch with us
        </Typography>

          <Formik
            initialValues={initialValues}
            onSubmit={submitHandler}
            validationSchema={validationSchema}
          >
            {(props) => {

              const {
                dirty,
                errors,
                handleBlur,
                handleChange,
                handleReset,
                handleSubmit,
                isSubmitting,
                touched,
                values,
              } = props;

              return (
                <form onSubmit={handleSubmit}>
                  <Grid container >
                    <Grid item xs={12} sm={6} md={6}>
                      <TextField
                        labelText="Your Name"
                        id="name"
                        name="name"
                        value={values.name}
                        error={errors.name && touched.name}
                        onChange={handleChange}
                        helperText={(errors.name && touched.name) && errors.name}
                        inputProps={{
                          error: errors.name && touched.name,
                          helperText: 'Is required'
                        }}
                        formControlProps={{
                          fullWidth: true,
                          helperText: 'Is required',
                          onBlur: handleBlur
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <TextField
                        labelText="Your Email"
                        id="email"
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                      labelText="Your Message"
                      id="message"
                      formControlProps={{
                        fullWidth: true,
                        className: classes.textArea
                      }}
                      inputProps={{
                        multiline: true,
                        rows: 5
                      }}
                    />
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                      <Button
                        type="button"
                        className="outline"
                        onClick={handleReset}
                        disabled={!dirty || isSubmitting}
                      >
                        Reset
                      </Button>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                      <Button color="primary" type="submit" disabled={isSubmitting}>
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              );
            }}
          </Formik>
      </Box>
    </Container>
  );
}
