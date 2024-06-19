import styles from "./UserProfile.module.scss";
import Event from "../Event/Event";

function UserProfile() {
  return (
    <div className={styles.all}>
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
        <button className={styles.logout}>Log Out</button>

        <button className={styles.delete}>Delete Account</button>
      </div>
      <div className={styles.events}>
        <h3>My Events</h3>
        <hr />
        <Event />
      </div>
    </div>
  );
}

export default UserProfile;
