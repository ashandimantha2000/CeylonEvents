import React, { Children } from "react";
import styles from "./Auth.module.scss";

function Signin({ children }) {
  return (
    <div className={styles.all}>
      <div className={styles.left}>
        <img src="https://wallpapercave.com/wp/wp2463807.jpg" alt="" />
      </div>
      <div className={styles.right}>{children}</div>
    </div>
  );
}

export default Signin;
