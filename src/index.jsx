import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import './global.css';

function start() {
  // eslint-disable-next-line
  gapi.client
    .init({
      apiKey: process.env.REACT_APP_YOUTUBE_API,
    })
    .then(() => {
      ReactDOM.render(
        <React.StrictMode>
          <App />
        </React.StrictMode>,
        document.getElementById('root')
      );
    });
}
// eslint-disable-next-line
gapi.load('client', start);
