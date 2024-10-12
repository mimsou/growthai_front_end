import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { GoogleOAuthProvider } from '@react-oauth/google';
import store from './store/store';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GoogleOAuthProvider clientId={"244958252159-hl1ir8a7isdhpletnuuvbdobtdcfjebk.apps.googleusercontent.com"}>
        <App />
      </GoogleOAuthProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
