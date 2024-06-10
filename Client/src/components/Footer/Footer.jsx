import styles from "./Footer.module.scss";
import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_row1}>
        <div>
          <p>Post you events with us and get more reach</p>
          <br />
          <button>Get Started</button>
        </div>
        <div>
          <div className={styles.contact}>
            <h4>Contact Us</h4>
            <CiLocationOn size={24} />
            <p>#22, Kandy Road, Colombo 07</p>
            <CiMail size={24} />
            <p>info@ceylonevents.lk</p>
            <IoCallOutline size={23} />
            <p>011 311 2927</p>
          </div>
          <div className={styles.smm}>
            <h4>Follow Us</h4>
            <div className={styles.icons}>
              <FaFacebook size={24} />
              <FaInstagram size={24} />
              <FaYoutube size={24} />
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className={styles.footer_row2}>
        <p>
          <b>Ceylon</b>Events | Designed and Developed by <b>Ashan Dimantha</b>{" "}
          with 💗
          <p>© 2024 All Rights Reserved</p>
        </p>
      </div>
    </div>
  );
}

export default Footer;
