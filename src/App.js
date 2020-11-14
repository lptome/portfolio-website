import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import NavigationBar from "./components/Navbar/NavigationBar";
import { AnimatePresence, motion } from "framer-motion";

//Pages
import LandingPage from "./pages/Landing/LandingPage";
import AboutPage from "./pages/About/AboutPage";
import PortfolioPage from "./pages/Portfolio/PortfolioPage";
import ContactPage from "./pages/Contact/ContactPage";

import { Row, Col, Button } from "react-bootstrap";

import "./App.css";

import Container from "react-bootstrap/Container";

function App(props) {
  const location = useLocation();
  return (
    <div className="App">
      <div className="Navbar">
        <NavigationBar location={location.pathname} />
      </div>
      <Container>
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route path="/" exact render={() => <LandingPage />} />
            <Route path="/about" exact render={() => <AboutPage />} />
            <Route path="/portfolio" exact render={() => <PortfolioPage />} />
            <Route path="/contact" exact render={() => <ContactPage />} />
          </Switch>
        </AnimatePresence>
      </Container>
    </div>
  );
}

export default App;
