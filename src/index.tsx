import * as smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill(); // This polyfill must come first
import 'intersection-observer';
import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <Route component={App} />
  </BrowserRouter>,
  document.getElementById('root'),
);

serviceWorker.register();
