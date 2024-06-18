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
  {
    title: "Contact",
    path: "/contact",
  },
];

function Nav() {
  const location = useLocation();
  const page =
    location.pathname === "/login" || location.pathname === "/signup";
  const [isScrolled, setIsScrolled] = useState(false);

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
            <NavLink to="/login">
              <button>Login</button>
            </NavLink>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Nav;
