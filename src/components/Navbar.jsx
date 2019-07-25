import React, { useState } from 'react';
import { useLocalStorage } from "./useLocalStorage";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mode, setMode] = useLocalStorage("mode", { className: "toggle toggled" });


  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={() => setMode({ className: "toggle" })}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
