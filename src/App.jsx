import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import CustomSheds from "./Pages/CustomSheds";
import CustomTrailers from "./Pages/CustomTrailers";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/custom-sheds" element={<CustomSheds />} />
            <Route path="/custom-trailers" element={<CustomTrailers />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
