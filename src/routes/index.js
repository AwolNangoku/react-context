import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  AccountPage,
  HomePage,
  LoginPage,
  RegisterPage,
  ShippingPage,
} from "../pages";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/schedule-pickup" element={<ShippingPage />} />
        <Route path="/my-account" element={<AccountPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}
