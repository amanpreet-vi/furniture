import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import Contact from "./components/Contact";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
