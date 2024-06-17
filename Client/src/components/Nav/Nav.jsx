import { NavLink } from "react-router-dom";
import styles from "./Nav.module.scss";
import { useLocation } from "react-router-dom";

const data = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Events",
    path: "/events",
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
  const page = location.pathname === "/login" || location.pathname === "/signup";
  const navClass = `${styles.nav} ${page ? styles.navcolor : ''}`;
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
