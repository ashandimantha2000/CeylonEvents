import { NavLink } from "react-router-dom";
import "./Nav.scss";

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
      <div className="nav">
        <div className="nav-logo">
          <h2>
            <span>Ceylon</span>Events
          </h2>
        </div>
        <div className="nav-menu">
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
