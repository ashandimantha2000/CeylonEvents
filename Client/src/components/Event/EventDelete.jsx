import styles from "../../components/Auth/Auth.module.scss";
import axios from "axios";

function EventDelete({ onCancel, _id }) {
    const handleDelete = () => {
        axios
          .delete(`http://localhost:3000/events/${_id}`)
          .then(() => {
         
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
    <div className={styles.logoutstyles}>
      <div className={styles.logdiv}>
        <h1>Delete</h1>
        <p>Are you sure you want to delete?</p>
        <button onClick={handleDelete}>Yes</button>
        <button className={styles.no_btn} onClick={onCancel}>No</button>
      </div>
    </div>
  );
}

export default EventDelete;