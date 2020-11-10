import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { AnimatePresence, motion } from "framer-motion";

//Pages
import LandingPage from "./pages/Landing/LandingPage";
import AboutPage from "./pages/About/AboutPage";
import PortfolioPage from "./pages/Portfolio/PortfolioPage";
import ContactPage from "./pages/Contact/ContactPage";

import "./App.css";

function App(props) {
  const location = useLocation();
  return (
    <div className="App">
      <div className="Navbar">
        <Navbar location={location.pathname} />
      </div>
      <div className="Content">
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route path="/" exact render={() => <LandingPage />} />
            <Route path="/about" exact render={() => <AboutPage />} />
            <Route path="/portfolio" exact render={() => <PortfolioPage />} />
            <Route path="/contact" exact render={() => <ContactPage />} />
          </Switch>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
