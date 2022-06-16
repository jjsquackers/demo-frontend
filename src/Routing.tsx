import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from './App';
import { AppBar } from "@mui/material";
import MyAppBar from "./MyAppBar";
import AddOrderPage from "./AddOrderPage";
import AddCustomerPage from "./AddCustomerPage";
import AboutPage from "./AboutPage";
import CustomerTable from "./CustomerTable";
import OrderTable from "./OrderTable";
export default function Routing() {
  return (
    <Router>
      {/* <MyAppBar></MyAppBar> */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/add-order" element={<AddOrderPage />} />
        <Route path="/add-customer" element={<AddCustomerPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/orders" element={<OrderTable />} />
        <Route path="/customers" element={<CustomerTable />} />
      </Routes>
    </Router>
  );
}
