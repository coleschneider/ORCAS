import 'babel-polyfill';
import 'raf/polyfill';
import * as smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill();
import 'intersection-observer'; // Keep polyfills in this order

import { BrowserRouter, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <BrowserRouter>
    <Route component={App} />
  </BrowserRouter>,
  document.getElementById('root'),
);

serviceWorker.register();
