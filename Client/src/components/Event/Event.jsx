import styles from "./Event.module.scss";
import event1 from "../../assets/images/Event_Images/event1.png";
import content from "./Events.json";
import { CiCalendar } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

function Event() {
  const location = useLocation();
  let headerText = 'Upcoming Events';
  if (location.pathname === '/events') {
    headerText = 'Related Events';
  }
  return (
    <div>
      <h1 className="headerss">{headerText}</h1>
      <div className={styles.all}>
        {content.map((event) => (
          <div key={event.id} className={styles.card}>
            <div>
              <div>
                <img src={event.image} alt="" />
              </div>
              <div className={styles.cardspace}>
                <div className={styles.card_data}>
                  <CiCalendar />
                  <h5>{event.date}</h5>
                  <CiClock2 />
                  <h5>{event.time}</h5>
                  <IoLocationOutline />
                  <h5>{event.location}</h5>
                </div>
                <h3>{event.name}</h3>
                <p>{event.description}</p>
                <a href={event.link}>
                  <button>View Details</button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Event;
