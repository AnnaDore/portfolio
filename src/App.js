import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { isMobile, isDesktop } from "react-device-detect";

import Header from "./components/header/Header";
import Intro from "./components/intro/Intro"
import About from "./components/about/About"
import Skills from "./components/skills/Skills"
import Experience from "./components/experience/Experience"
import Projects from "./components/projects/Projects"
import Contacts from "./components/contacts/Contacts"
import Footer from "./components/footer/Footer"

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Intro />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contacts />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
