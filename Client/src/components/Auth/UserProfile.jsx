import { useState, useEffect } from "react";
import styles from "./Auth.module.scss";
import Logout from "./Logout";
import Event from "../Event/Event";

function UserProfile() {
  const [logclick, setLogClick] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
  
    if (!token) {
      window.location.href = "/login";
    } else {
      setIsAuthorized(true);
    }
  }, []);

  const logoutClick = () => {
    setLogClick(true);
  };

  const handleCancelLogout = () => {
    setLogClick(false);
  };

  if (!isAuthorized) {
    return null; 
  }

  return (
    <div>
      {logclick && <Logout onCancel={handleCancelLogout} />}
      <div className={styles.profile}>
        <h1>User Profile</h1>
        <div className={styles.data}>
          <h3>Name :</h3>
          <p>Ashan Dimantha</p>
        </div>
        <div className={styles.data}>
          <h3>Email :</h3>
          <p>ashan.self@gmail.com</p>
        </div>
        <div className={styles.btns}>
          <button className={styles.edit}>Edit Password</button>
          <button className={styles.logout_btn} onClick={logoutClick}>
            Log Out
          </button>
          <button className={styles.delete}>Delete Account</button>
        </div>
        <div className={styles.events}>
          <h3>My Events</h3>
          <hr />
          <Event />
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
