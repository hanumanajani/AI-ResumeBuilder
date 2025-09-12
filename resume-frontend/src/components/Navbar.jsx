import React, { useState, useEffect } from "react";
import { Link } from "react-router";

function Navbar() {
  const [theme, setTheme] = useState("light");

  // Apply theme to html
  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav className="w-full shadow-md bg-base-100 transition-colors duration-500 px-6 py-3 flex items-center justify-between">
      {/* Left: Brand */}
      <div className="flex items-center">
        <Link
          to="/"
          className="text-2xl font-bold text-base-content hover:text-primary transition-colors duration-300"
        >
          AI Resume Maker
        </Link>
      </div>

      {/* Center: Desktop Links */}
      <div className="hidden lg:flex space-x-10 mx-auto font-medium">
        <Link
          to="/about"
          className="text-base-content hover:text-primary transition-colors duration-300"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="text-base-content hover:text-primary transition-colors duration-300"
        >
          Contact
        </Link>
      </div>

      {/* Right: Theme Toggle */}
      <div className="flex items-center gap-4">
        {/* Cylindrical Toggle */}
        <label className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="toggle toggle-primary"
            checked={theme === "dark"}
            onChange={toggleTheme}
          />
          <span className="ml-2 text-sm text-base-content">
            {theme === "light" ? "Light" : "Dark"}
          </span>
        </label>

        {/* Mobile Dropdown */}
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost btn-circle ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-base-content"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow-lg rounded-box w-40 bg-base-100 text-base-content"
          >
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
