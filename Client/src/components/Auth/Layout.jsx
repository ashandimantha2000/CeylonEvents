import React, { Children } from "react";
import styles from "./Auth.module.scss";


function Signin({ children, bg }) {

  return (
    <div className={styles.all}>
      <div className={styles.left}>
        <img src={bg} alt="" />
      </div>
      <div className={styles.right}>{children}</div>
    </div>
  );
}

export default Signin;
