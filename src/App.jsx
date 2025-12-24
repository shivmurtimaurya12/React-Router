import React from "react";
import { Route, Routes, Link } from "react-router-dom";
// import './App.css'
import Head from "./Head.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import Info from "./Info.jsx";

import AboutTopic from "./AboutTopic.jsx";
import Contacts from "./Contacts.jsx";
import InfoTopic from "./InfoTopic.jsx";
import HeadTopic from "./HeadTopic.jsx";

function App() {
  return (
    <>
      {/* navigation */}
      <nav style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Link to="/">Home </Link>
        <Link to="/head">Head</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>

        <Link to="/info">Info</Link>
      </nav>

      <h1 style={{ textAlign: "center", color: "red" }}>Main Page</h1>

      <h2 style={{ textAlign: "center", color: "green" }}>Second tag</h2>

      <div
        style={{
          textAlign: "center",
          margin: "0 auto",
          height: "300px",
          width: "400px",
          backgroundColor: "gray",
        }}
      >
        <h1 style={{ color: "pink" }}>Hello this runner component</h1>

        <Routes>
          <Route path="/about" element={<About />}>
            <Route path="abouttopic" element={<AboutTopic />} />
          </Route>

          <Route path="/contact" element={<Contact />}>
            <Route path="contacts" element={<Contacts />} />
          </Route>

          <Route path="/head" element={<Head />}>
            <Route path="headtopic" element={<HeadTopic />} />
          </Route>

          <Route path="/info" element={<Info />}>
            <Route path="infotopic" element={<InfoTopic />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
