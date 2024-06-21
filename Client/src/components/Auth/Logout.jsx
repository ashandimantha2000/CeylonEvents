import styles from "./Auth.module.scss";

function Logout({ onCancel }) {
    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.href = "/";
    };
  return (
    <div className={styles.logoutstyles}>
      <div className={styles.logdiv}>
        <h1>Logout</h1>
        <p>Are you sure you want to logout?</p>
        <button onClick={handleLogout}>Yes</button>
        <button className={styles.no_btn} onClick={onCancel}>No</button>
      </div>
    </div>
  );
}

export default Logout;