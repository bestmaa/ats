import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,


} from "react-router-dom";
import CustomerForm from './page/customer/CustomerForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path='customer' element={<CustomerForm />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
