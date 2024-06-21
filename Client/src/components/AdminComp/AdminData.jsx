import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Data.module.scss";
import { useParams } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import EventDelete from "../Event/EventDelete";

function AdminData() {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  const { _id } = useParams();

  const [isdeleted, setIsDeleted] = useState(false);

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
  const handleDeletePopup = () => {
    setIsDeleted(true);
  }
  
  const deleteClose = () => {
    setIsDeleted(false);
  }
  return (
    <div>
       { isdeleted&& <EventDelete onCancel={deleteClose} _id={_id}  />}
      <main>
        <h1>All Events</h1>
        <hr />
        <h3>Admin Panel</h3>
        <div className={styles.all}>
          {events
            .sort((a, b) => new Date(a.createdDate) - new Date(b.createdDate))
            .map((event, index) => (
              <div key={event.index} className={styles.all}>
                <div className={styles.card}>
                  <div>
                    <img
                      src={`http://localhost:3000/${event.image}`}
                      alt="event-image"
                    />
                  </div>
                  <div className={styles.data}>
                    <div className={styles.dataline}>
                      <h5>Name :</h5>
                      <span>{event.name}</span>
                    </div>
                    <div className={styles.dataline}>
                      <h5>date :</h5>
                      <span>{event.date}</span>
                    </div>
                    <div className={styles.dataline}>
                      <h5>Time :</h5>
                      <span>{event.time}</span>
                    </div>
                    <div className={styles.dataline}>
                      <h5>Location :</h5>
                      <span>{event.location}</span>
                    </div>
                    <div className={styles.dataline}>
                      <h5>Price :</h5>
                      <span>{event.price}</span>
                    </div>
                    <div className={styles.dataline}>
                      <h5>Organizer :</h5>
                      <span>{event.organizer}</span>
                    </div>
                  </div>
                  <div className={styles.admin_buttons}>
                    <button
                      className={styles.edit}
                      onClick={() => navigate(`/edit-event/${event._id}`)}
                    >
                      Edit
                    </button>
                    <button
                      className={styles.delete}
                      onClick={handleDeletePopup}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </main>
    </div>
  );
}

export default AdminData;
