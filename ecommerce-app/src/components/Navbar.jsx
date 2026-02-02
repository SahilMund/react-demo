import { Link, NavLink } from "react-router-dom";
import viteLogo from "/vite.svg";
import { Moon, Sun } from "lucide-react";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

function Navbar({
  links,
  logo = viteLogo,
  variant = "primary",
  showThemeToggler,
}) {
  const { theme, setTheme } = useTheme();

  return (
    <div className={`flex ${variant}`}>
      <div className="left ">
        <img src={logo} alt="logo-img" />
      </div>

      <ul className="flex">
        {links.map((link) => (
          <NavLink
            to={link.path}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            <li key={link.label}>{link.label}</li>
          </NavLink>
        ))}
      </ul>

      {showThemeToggler && (
        <button
          onClick={() => {
            setTheme((prev) => (prev === "dark" ? "light" : "dark"));
          }}
        >
          {theme !== "dark" ? <Moon size="16px" /> : <Sun size="16px" />}
        </button>
      )}
    </div>
  );
}

export default Navbar;

// {
//     span: 4,
//     btn: "update count"
// }

// {}
