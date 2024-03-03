import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Send from "./components/Send";
import PopUp from "./components/PopUp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PopUp />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/send" element={<Send />} />
      </Routes>
    </Router>
  );
}

export default App;
