import "./App.css";
import React, { useState, useEffect } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import { Route } from "react-router";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";

const App = () => {
  // Loading state
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wait for 3 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return isLoading ? (
    // If page is still loading then splash screen
    <div className="splash ">
      <img src="/hacktoberfest.svg" alt="" width="auto" height="auto" />

      <PropagateLoader size="20" />
    </div>
  ) : (
    <div className="app">
      <Navbar />
      <Route path="/" exact>
        <Content />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Footer />
    </div>
  );
};

export default App;
