import { NavLink } from "react-router-dom";
import styles from "./Nav.module.scss";

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
  return (
    <>
      <div className={styles.nav}>
        <div className={styles.nav_logo}>
          <h2>
            <span>Ceylon</span>Events
          </h2>
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
          </ul>
        </div>
      </div>
    </>
  );
}

export default Nav;
