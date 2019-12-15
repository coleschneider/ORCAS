import 'babel-polyfill';
import 'raf/polyfill';
import { BrowserRouter, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { Helmet } from 'react-helmet';
import ImageLogo from 'Images/logo_black.svg';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <BrowserRouter>
    <Helmet>
      <meta property="og:title" content="ORCAS" />
      <meta property="og:description" content="Oxnard Recreation Center for Seniors & Adults" />
      <meta property="og:image" content={ImageLogo} />
    </Helmet>
    <Route component={App} />
  </BrowserRouter>,
  document.getElementById('root'),
);

serviceWorker.register();
