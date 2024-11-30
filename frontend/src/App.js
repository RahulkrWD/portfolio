import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import PopUp from "./page/PopUp";
import PageNotFound from "./page/PageNotFound";
import HomePage from "./page/Homepage/HomePage";
import Send from "./page/Homepage/contact/Send";


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
function App() {
  return (
   <>
      <Routes>
        <Route path="/" element={<PopUp />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/send" element={<Send />} />
      </Routes>
      <ScrollToTop />
    </>
  );
}

export default App;
