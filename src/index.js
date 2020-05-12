import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";


// To prevent the error: 'ThemeProvider' is not exported from '@material-ui/core/styles'
// https://github.com/mui-org/material-ui/issues/16489
// import { ThemeProvider } from '@material-ui/core/styles';
// Alan: Changing background to "000" in theme.js does infact work.
// So below change works to prevent the above error
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';

import App from './App';
import ButtonsPage from './components/ButtonsPage';
import ContactForm from './components/ContactForm';
import ContactsPage from './components/ContactsPage';
import Footer from './components/Footer';
import Header from './components/Header';

var hist = createBrowserHistory();

ReactDOM.render(
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <Router history={hist}>
      <React.Fragment>
        <Header/>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/Buttons" component={ButtonsPage} />
          <Route path="/Contacts" component={ContactsPage} />
          <Route path="/ContactForm" component={ContactForm} />
        </Switch>
        <Footer/>
      </React.Fragment>
  </Router>,
  </ThemeProvider>,
  document.querySelector('#root'),
);
