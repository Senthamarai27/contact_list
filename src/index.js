import React from 'react';
import  { createRoot } from 'react-dom/client';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css';
import { composeWithDevTools } from 'redux-devtools-extension';
import contactReducer from './redux/reducers/contactReducer';
//creating store
const store = createStore(contactReducer, composeWithDevTools());
const root = createRoot(document.querySelector('#root'));
root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

