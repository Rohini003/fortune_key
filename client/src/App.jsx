import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./components/Landing";
import ContactPage from "./components/Contact";

function App() {
  return (
    <Router>
      <Navbar /> {/* ✅ Navbar is global */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;