import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './assets/css/style.css';
import './assets/css/slick.css';
import './assets/css/meanmenu.css';
import './assets/css/icomoon.css';
import './assets/css/bootstrap.min.css';
import './assets/css/bootstrap.css';
import './assets/css/bootstrap-grid.css';
import './assets/css/animate.min.css';
import './assets/css/bootstrap-reboot.css';
import './assets/css/responsive.css';
import './assets/css/owl.carousel.min.css';
import './assets/css/normalize.css';
import './assets/css/nice-select.css';
import './assets/css/jquery.mCustomScrollbar.min.css';
import './assets/css/font-awesome.min.css';
import './assets/css/jquery-ui.css';
import './assets/css/default-skin.css';
import './assets/css/jquery.fancybox.min.css';
import {configureStore} from "@reduxjs/toolkit"
import {Provider} from "react-redux"
import cartReducer, { getTotals } from "./features/cartSlice";
import axios from "axios";

axios.defaults.withCredentials = true;

const store = configureStore({
  reducer: {
      cart: cartReducer,
  }
});

store.dispatch(getTotals());

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
