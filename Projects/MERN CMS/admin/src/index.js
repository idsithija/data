import React from 'react';
import ReactDOM from 'react-dom';
import './main.scss';
import App from './App';
import { AuthContextProvider } from './context/authContext/AuthContext';
import { PageContextProvider } from './context/pageContext/PageContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <PageContextProvider>
        <App />
      </PageContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
