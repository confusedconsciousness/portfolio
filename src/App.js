import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

import NavBar from "./components/Navbar/NavBar";
import Introduction from "./components/Introduction/Introduction";
function App() {
  return (
    <Router>
      <div id="main-app">
        <NavBar />
        <div id="main-app-body">
          <Introduction />
        </div>
      </div>
    </Router>
  );
}

export default App;
