import React from 'react';
import ReactDOM from 'react-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
