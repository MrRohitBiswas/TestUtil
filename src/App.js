import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const toggle = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#31373c";
      document.body.style.color = "white";
      showAlert("Dark Mode has been enabled", "success");
    } else if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light Mode has been enabled", "success");
    }
  };
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const onLoading = () => {
    let time = 1500;
    setInterval(() => {
      document.title = "Best Text Utility App";
    }, time);
    setInterval(() => {
      document.title = "TextUtils";
    }, time + 1500);
  };
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggle={toggle} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About mode={mode} />} />
            <Route
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter your text below to analyse:"
                  mode={mode}
                  onLoad={onLoading()}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
