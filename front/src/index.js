import React, { useEffect } from "react";
import ReactDOM from 'react-dom';
import './reset.css';
import './global.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Rdux 적용
import { Provider } from 'react-redux';
import configureStore from "./redux/configureStore";

// React Cookie
import { CookiesProvider } from 'react-cookie';

const store = configureStore({ loading: false, login: {modal: false}});
ReactDOM.render(
  <Provider store={store}>
    <CookiesProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </CookiesProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
