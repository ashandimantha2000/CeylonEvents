import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Event.module.scss";
import content from "./Events.json";
import { CiCalendar } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";

function Event() {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();
  //Change the title with location
  const location = useLocation();
  let headerText = "Upcoming Events";
  if (location.pathname === "/events") {
    headerText = "Related Events";
  }

  //get data via axios
  useEffect(() => {
    axios
      .get("http://localhost:3000/events/")
      .then((response) => {
        setEvents(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      
      <div className={styles.all}>
        {events.map((event, index) => (
          <div key={event.index} className={styles.card}>
            <div>
              <div>
                <img src={event.image} alt="" />
              </div>
              <div className={styles.cardspace}>
                <div className={styles.card_data}>
                  <CiCalendar />
                  <h5>{new Date(event.date).toLocaleDateString()}</h5>
                  <CiClock2 />
                  <h5>{event.time}</h5>
                  <IoLocationOutline />
                  <h5>{event.location}</h5>
                </div>
                <h3>{event.name}</h3>
                <p>{event.description.slice(0, 250)}...</p>
                <a onClick={() => navigate(`/event-details/${event._id}`)}>
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
