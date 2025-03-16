import React from "react";
import LandingPage from "./Pages/LandingPage.jsx";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./Compounds/Products/Products.jsx";
import AddCard from "./Compounds/AddCard.jsx/AddCard.jsx";
import LoginForm from "./Compounds/LoginForm/LoginForm.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/AddCard" element={<AddCard />} />
        <Route path="/LoginForm" element={<LoginForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
