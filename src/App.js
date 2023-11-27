import React from "react";
import "./index.css"
import Home from './routs/Home';
import Projects from './routs/Projects';
import Contact from './routs/Contact';
import About from './routs/About';
import {Route,Routes} from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </>
  );
}

export default App;
