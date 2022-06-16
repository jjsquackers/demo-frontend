import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from './App';
import { AppBar } from "@mui/material";
import MyAppBar from "./MyAppBar";
import AddOrderPage from "./AddOrderPage";
import AddCustomerPage from "./AddCustomerPage";
export default function Routing() {
  return (
    <Router>
      {/* <MyAppBar></MyAppBar> */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/orders" element={<AddOrderPage />} />
        <Route path="/customers" element={<AddCustomerPage />} />
        <Route path="/about" element={<MyAppBar />} />
      </Routes>
    </Router>
  );
}
