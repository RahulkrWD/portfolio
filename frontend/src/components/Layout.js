import React, { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

function Layout({ children }) {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
    document.body.className = theme ? "dark-mode" : "light-mode";
  }, [theme]);

  return (
    <>
      <button
        className={`theme-toggle ${theme ? "dark" : "light"}`}
        onClick={() => setTheme((prev) => !prev)}
        aria-label={theme ? "Switch to light mode" : "Switch to dark mode"}
      >
        {theme ? <FaSun className="icon" /> : <FaMoon className="icon" />}
      </button>

      <main className={theme ? "dark-mode" : "light-mode"}>{children}</main>
    </>
  );
}

export default Layout;
