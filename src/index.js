import React from 'react';
import ReactDOM from 'react-dom/client';
import {HashRouter} from 'react-router-dom';
import App from './App';
import FontStyles from './fonts/fontStyles';
import GlobalProvider from './context/GlobalContext';

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
