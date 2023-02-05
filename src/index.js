import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop';
import './assets/css/theme.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import './assets/css/navbar.css';


ReactDOM.render(
  <BrowserRouter>
  <ScrollToTop/>
     <App/>
  </BrowserRouter>,
  document.getElementById("root")
);