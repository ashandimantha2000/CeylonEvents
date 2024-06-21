import { useState, useEffect } from "react";
import styles from "./Admin.module.scss";
import Logout from "../Auth/Logout";

function AdminNav() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      window.location.href = "/admin/login";
    } else {
      setIsAuthorized(true);
    }
  }, []);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handlelogoutClick = () => {
    setIsLoggedIn(true);
  };

  const handlelogoutCancel = () => {
    setIsLoggedIn(false);
  };
  if (!isAuthorized) {
    return null; 
  }
  return (
    <div>
      {isLoggedIn && <Logout onCancel={handlelogoutCancel} />}
      <div className={styles.admin}>
        <div>
          <ul>
            <div className={styles.logo}>
              <h2>
                <span>Ceylon</span>Events
              </h2>
              <h4>Admin</h4>
            </div>
            <li>
              <a href="/admin/dashboard">Dashboard</a>
            </li>
            {/* <li>
              <a href="/admin/events">Events</a>
            </li> */}
            <li>
              <a href="/admin/users">Users</a>
            </li>
            <button onClick={handlelogoutClick}>Log Out</button>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AdminNav;
