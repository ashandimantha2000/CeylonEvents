import styles from "./Event.module.scss";
import content from "./Events.json";
import axios from "axios";
import { CiCalendar } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { CiMoneyBill } from "react-icons/ci";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Event from "./Event";
import Spinner from "../Spinner/Spinner";

function EventDetails() {
  const [event, setEvent] = useState(null);
  const { _id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/events/${_id}`)
      .then((response) => {
        setEvent(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [_id]);

  return (
    <div>
      {event ? (
        <div>
          <div className={styles.hero_img}>
            <img src={`http://localhost:3000/${event.image}`} alt="home-back" />
          </div>
          <main className={styles.details}>
            <div className={styles.headline}>
              <h2>{event.name}</h2>
              <button>Buy Tickets</button>
            </div>
            <div className={styles.details_data}>
              <CiCalendar size={25} color="red" />
              <h5>{new Date(event.date).toLocaleDateString()}</h5>
              <CiClock2 size={25} color="red" />
              <h5>{event.time}</h5>
              <IoLocationOutline size={25} color="red" />
              <h5>{event.location}</h5>
              <CiMoneyBill size={25} color="red" />
              <h5>{event.price}</h5>
              <CiMoneyBill size={25} color="red" />
              <h5>{event.organizer}</h5>
            </div>
            <p>{event.description}</p>
            <h1 className="headerss">Related Events</h1>
            <Event />
          </main>
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
}

export default EventDetails;
