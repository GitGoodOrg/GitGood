import React from 'react';
import { render } from 'react-dom';
import App from './App';
// import store from './app/store'
// import { Provider } from 'react-redux'
import styles from './stylesheets/styles.scss';
import '@fontsource/roboto';

render(
  // <Provider store={store}>
    <App />,
  // </Provider>,
  document.getElementById('app'),
);
