import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Header/Header";
import Introduction from "./components/Introduction/Introduction";
import Experience from "./components/Experience/Experience";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Work from "./components/Work/Work";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import { Container } from "@mui/material";
function App() {
  return (
    <Router>
      <div id="main-app">
        <Header />
        <div id="main-app-body">
          <Container id="sidebar-container">
            <Sidebar id="sidebar" />
          </Container>
          <Container id="introduction-container">
            <section>
              <Introduction />
            </section>
            <section>
              <Experience />
            </section>
            <section>
              <Skills />
            </section>
            <section>
              <Work />
            </section>
            <section>
              <Contact />
            </section>
          </Container>
          <Container id="nav-bar-container">
            <Navbar />
          </Container>
        </div>
      </div>
    </Router>
  );
}

export default App;
