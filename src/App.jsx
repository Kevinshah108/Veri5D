import React from "react";
import MainPage from "./components/MainPage.jsx";
import "./components/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from "./components/Services.jsx";
import About from "./components/About.jsx";
import Clients from "./components/Clients.jsx";
import Gallery from "./components/Gallery.jsx";
import Contact from "./components/Contact.jsx";

function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route
              path="/"
              element={
                ((<MainPage />),
                (<About />),
                (<Services />),
                (<Clients />),
                (<Gallery />),
                (<Contact />))
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
