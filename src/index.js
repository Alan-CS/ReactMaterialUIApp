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
import Header from './components/Header';
import HOCApiExamplePage from './components/HOCApiExamplePage';

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
          <Route path="/HOCApiExample" component={HOCApiExamplePage} />
        </Switch>
      </React.Fragment>
  </Router>,
  </ThemeProvider>,
  document.querySelector('#root'),
);
