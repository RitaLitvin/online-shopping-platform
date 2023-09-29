import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, HashRouter} from 'react-router-dom'
import App from './App';
import FontStyles from './fonts/fontStyles';
import GlobalProvider from './context/GlobalContext';
// const data = require('../server/db.json');
// module.exports = () => ({
//   data: data,
// });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalProvider>
      <HashRouter>
        <FontStyles />
        <App />
      </HashRouter>
    </GlobalProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

