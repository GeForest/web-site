import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import { createBrowserRouter,BrowserRouter,RouterProvider,Route,Link, } from "react-router-dom";

import App from './App';
import './assets/global.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <BrowserRouter>
      <App />
   </BrowserRouter>
//    <React.StrictMode>
//       <App />
//   </React.StrictMode>
)
