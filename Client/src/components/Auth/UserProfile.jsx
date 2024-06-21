import styles from "./Auth.module.scss";
import Event from "../Event/Event";
import Logout from "./Logout";
import { useState } from "react";

function UserProfile() {
  const [logclick, setLogClick] = useState(false);
  const logoutClick = () => {
    setLogClick(true);
  };
  const handleCancelLogout = () => {
    setLogClick(false);
  };
  return (
    <div>
      {logclick && <Logout onCancel={handleCancelLogout} />}
      <div className={styles.profile}>
        <h1>User Profile</h1>
        <div className={styles.data}>
          <h3>Name :</h3>
          <p>John Doe</p>
        </div>
        <div className={styles.data}>
          <h3>Email :</h3>
          <p>johndoe@gmail.co</p>
        </div>
        <div className={styles.btns}>
          <button className={styles.edit}>Edit Password</button>
          <button className={styles.logout_btn} onClick={logoutClick}>Log Out</button>
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