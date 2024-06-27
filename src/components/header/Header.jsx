import "./Header.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { greeting } from "../../portfolio";
// import { Fade } from "react-reveal";
// import { NavLink, Link } from "react-router-dom";
// import { greeting, settings } from "../../portfolio.js";
import { HiMoon } from "react-icons/hi";
import { CgSun } from "react-icons/cg";
import { useRecoilState } from "recoil";
import { themeAtom } from "../../recoil/themeAtom";
import { themes } from "../../theme";

import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0px, -40px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

function CustomAnimation({ children }) {
  return (
    <Reveal duration={2000} triggerOnce keyframes={customAnimation}>
      {children}
    </Reveal>
  );
}

function Header() {
  const [currentTheme, setCurrentTheme] = useRecoilState(themeAtom);
  const theme = themes[currentTheme];

  function changeTheme() {
    if (currentTheme === "light") {
      setCurrentTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setCurrentTheme("light");
      localStorage.setItem("theme", "light");
    }
  }

  const icon =
    theme.name === "dark" ? (
      <HiMoon
        strokeWidth={1}
        size={20}
        color={theme.name === "light" ? "#F9D784" : "#A7A7A7"}
      />
    ) : (
      <CgSun
        strokeWidth={1}
        size={20}
        color={theme.name === "light" ? "#F9D784" : "#A7A7A7"}
      />
    );

  return (
    <CustomAnimation>
      <header className="header">
        <NavLink to="/" className="logo">
          <span style={{ color: theme.text }}></span>
          <span className="logo-name" style={{ color: theme.text }}>
            {greeting.logo_name}
          </span>
          <span style={{ color: theme.text }}></span>
        </NavLink>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          <li>
            <NavLink
              className="homei"
              to="/home"
              style={{
                borderRadius: 5,
                color: theme.text,
                fontWeight: "bold",
              }}
            >
              Home
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              className="ec"
              // to="/education"
              style={{
                borderRadius: 5,
                color: theme.text,
                fontWeight: "bold",
              }}
            >
              Education and Certifications
            </NavLink>
          </li> */}
          <li>
            <NavLink
              className="xp"
              // to="/experience"
              style={{
                borderRadius: 5,
                color: theme.text,
                fontWeight: "bold",
              }}
            >
              Experience
            </NavLink>
          </li>
          <li>
            <NavLink
              className="projects"
              to="/projects"
              style={{
                borderRadius: 5,
                color: theme.text,
                fontWeight: "bold",
              }}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              className="cr"
              to="/contact"
              style={{
                borderRadius: 5,
                color: theme.text,
                fontWeight: "bold",
              }}
            >
              Contact
            </NavLink>
          </li>
          <button
            className={
              theme.name === "light" ? "themeIcon light" : "themeIcon dark"
            }
            onClick={changeTheme}
          >
            {icon}
          </button>
        </ul>
      </header>
      {/* <div>
        <header className="header">
          <NavLink to="splash" className="logo">
            <span style={{ color: theme.text }}></span>
            <span className="logo-name" style={{ color: theme.text }}>
              {greeting.logo_name}
            </span>
            <span style={{ color: theme.text }}></span>
          </NavLink>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>
          <ul className="menu">
            <li>
              <NavLink
                className="homei"
                to="/home"
                tag={Link}
                activeStyle={{ fontWeight: "bold" }}
                style={{ borderRadius: 5, color: theme.text }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="ec"
                to="/education"
                tag={Link}
                activeStyle={{ fontWeight: "bold" }}
                style={{ borderRadius: 5, color: theme.text }}
              >
                Education and Certifications
              </NavLink>
            </li>
            <li>
              <NavLink
                className="xp"
                to="/experience"
                tag={Link}
                activeStyle={{ fontWeight: "bold" }}
                style={{ borderRadius: 5, color: theme.text }}
              >
                Experience
              </NavLink>
            </li>
            <li>
              <NavLink
                className="projects"
                to="/projects"
                tag={Link}
                activeStyle={{ fontWeight: "bold" }}
                style={{ borderRadius: 5, color: theme.text }}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                className="cr"
                to="/contact"
                tag={Link}
                activeStyle={{ fontWeight: "bold" }}
                style={{ borderRadius: 5, color: theme.text }}
              >
                Contact and Resume
              </NavLink>
            </li>
            <button {...styles} onClick={changeTheme}>
              {icon}
            </button>
          </ul>
        </header>
      </div> */}
    </CustomAnimation>
  );
}

export default Header;
