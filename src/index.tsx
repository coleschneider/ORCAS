import 'babel-polyfill';
import 'raf/polyfill';
import { BrowserRouter, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { Helmet } from 'react-helmet';
import Beach from 'Images/beach.jpg';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
console.log(process.env.PUBLIC_URL);
ReactDOM.render(
  <BrowserRouter>
    <Helmet>
      <meta name="description" content="The Future of Oxnard's Senior Center is Bright" />
      <link rel="canonical" href="https://orcaseniors.org/" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="ORCAS — The Future of Oxnard's Senior Center is Bright" />
      <meta property="og:description" content="The Future of Oxnard's Senior Center is Bright" />
      <meta property="og:url" content="https://orcaseniors.org/" />
      <meta property="og:site_name" content="orcaseniors" />
      <meta property="og:image" content={`https://orcaseniors.org${Beach}`} />
      <meta property="og:image:secure_url" content={`https://orcaseniors.org${Beach}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="600" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:description" content="The Future of Oxnard's Senior Center is Bright" />
      <meta name="twitter:title" content="Oxnard Recreation Center for Adults & Seniors" />
      <meta name="twitter:image" content={`https://orcaseniors.org${Beach}`} />
    </Helmet>
    <Route component={App} />
  </BrowserRouter>,
  document.getElementById('root'),
);

serviceWorker.register();
