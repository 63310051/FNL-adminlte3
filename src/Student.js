import "./App.css";
import Login from './Login.js'
import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import StudentHeader from "./components/StudentHeader";
import Home from "./components/Home";
import About from "./components/About/About";
import Footer from "./components/Footer";
import Portfolio from "./components/About/Portfolio";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
    <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
      <StudentHeader />
      {/* <Home />
      <About /> */}
      <Portfolio />
      <Footer />
      </div>
    </>
  );
}

export default App;