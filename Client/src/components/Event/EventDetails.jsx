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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

function EventDetails() {
  const [event, setEvent] = useState(null);
  const { _id } = useParams();

  const deleted = () => toast("Event deleted successfully!");
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

  const handleDelete = () => {
    axios
      .delete(`http://localhost:3000/events/${_id}`)
      .then(() => {
        deleted();
        setTimeout(() => {
          window.location = "/";
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to delete event");
      });
  };

  return (
    <div>
      <ToastContainer />
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
            <div className={styles.editor}>
              <Link to={`/edit/${_id}`}>
                <button>Edit Event</button>
              </Link>
              <button onClick={handleDelete} className={styles.delete}>
                Delete Event
              </button>
            </div>
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
