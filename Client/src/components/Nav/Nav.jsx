import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./Nav.module.scss";

const data = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Create Events",
    path: "/create",
  },
  {
    title: "About",
    path: "/about",
  },
];

function Nav() {
  const location = useLocation();
  const page =
    location.pathname === "/login" ||
    location.pathname === "/signup" ||
    location.pathname === "/profile" ||
    location.pathname === "/create" ||
    location.pathname === "/paypal" ||
    location.pathname === "/about";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Check if token exists in localStorage
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [location]);

  const navClass = `${styles.nav} ${page ? styles.navcolor : ""} ${
    isScrolled ? styles.navcolor : ""
  }`;

  return (
    <>
      <div className={navClass}>
        <div className={styles.nav_logo}>
          <NavLink to="/">
            <h2>
              <span>Ceylon</span>Events
            </h2>
          </NavLink>
        </div>
        <div className={styles.nav_menu}>
          <ul>
            {data.map((item) => {
              return (
                <NavLink key={item.title} to={item.path}>
                  {item.title}
                </NavLink>
              );
            })}
            {isLoggedIn ? (
              <NavLink to="/profile">
                <button>Profile</button>
              </NavLink>
            ) : (
              <NavLink to="/login">
                <button>Login</button>
              </NavLink>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Nav;
