import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
function App() {
  const [mode, setMode] = useState("light");
  const toggle = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#31373c";
      document.body.style.color = "white";
    } else if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggle={toggle} />
      <div className="container my-3">
        <TextForm heading="Enter your text below to analyse:" mode={mode} />
        <About mode={mode} />
      </div>
    </>
  );
}

export default App;
