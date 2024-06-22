import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import styles from "../CreateComp/CreateComp.module.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditComp = () => {
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [location, setLocation] = useState("");
    const [organizer, setOrganizer] = useState("");
    const [price, setPrice] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();
    
    const success = () => {
      toast("Event Saved Successfully !");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    };
    
    const errorAlert = (error) => toast(`Event Edit failed: ${error.message}`);

    const handleSubmit = (e) => {
      e.preventDefault();
    
      const formData = new FormData();
      formData.append("name", title);
      formData.append("description", description);
      formData.append("date", date);
      formData.append("time", time);
      formData.append("location", location);
      formData.append("organizer", organizer);
      formData.append("price", parseFloat(price));
    
      axios
        .put(`http://localhost:3000/events/${id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          if (response.status === 200) {
            success();
          } else {
            console.error("Update failed with status:", response.status);
            errorAlert({ message: `Update failed with status: ${response.status}` });
          }
        })
        .catch((error) => {
          console.error("Update error:", error.response ? error.response.data : error);
          errorAlert(error);
        });
    };

  return (
    <div>
      <ToastContainer />
      <main>
        <div className={styles.allform}>
          <h1>Edit the event</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
            <input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />

            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />

            <label htmlFor="time">Time</label>
            <input
              type="time"
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />

            <label htmlFor="location">Location</label>
            <input
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />

            <label htmlFor="organizer">Organizer</label>
            <input
              id="organizer"
              value={organizer}
              onChange={(e) => setOrganizer(e.target.value)}
              required
            />

            <label htmlFor="price">Price</label>
            <input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />

            <label htmlFor="image">Image</label>
            <input
              type="file"
              id="image"
              onChange={(e) => setFile(e.target.files[0])}
            />

            <button type="submit">Save Changes</button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default EditComp;
