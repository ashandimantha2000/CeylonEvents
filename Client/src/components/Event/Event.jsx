import styles from "./Event.module.scss";
import event1 from "../../assets/images/Event_Images/event1.png";
import { CiCalendar } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";

function Event() {
  return (
    <div className={styles.card}>
      <div>
        <img src={event1} alt="" />
      </div>
      <div className={styles.cardspace}>
        <div className={styles.card_data}>
          <CiCalendar />
          <h5>27/08/2024</h5>
          <CiClock2 />
          <h5>7:30 PM</h5>
          <IoLocationOutline />
          <h5>Colombo 7</h5>
        </div>
        <h3>Event Name</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur. Fringilla orci ac cras morbi
          tortor. At sit amet ipsum habitasse. Vitae pulvinar viverra sapien
          tempus luctus gravida condimentum ornare. Cum justo vulputate in quis
          augue ac.
        </p>
        <button>View Details</button>
      </div>
    </div>
  );
}

export default Event;
