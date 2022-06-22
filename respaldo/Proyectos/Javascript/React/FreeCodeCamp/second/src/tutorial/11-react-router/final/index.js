import React from "react";
// react router
import { Router, Route, Routes } from "react-router-dom";
// pages
import Home from "./Home";
import About from "./About";
import People from "./People";
import Error from "./Error";
import Person from "./Person";
// navbar
import Navbar from "./Navbar";
const ReactRouterSetup = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact to="/">
          <Home />
        </Route>
        <Route to="/about">
          <About />
        </Route>
        <Route to="/people">
          <People />
        </Route>
        <Route to="/person/:id" children={<Person />}></Route>
        <Route to="*">
          <Error />
        </Route>
      </Routes>
    </Router>
  );
};

export default ReactRouterSetup;
