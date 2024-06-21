import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from './CreateComp.module.scss'; // Assuming you have CSS modules set up

const CreateComp = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [organizer, setOrganizer] = useState('');
  const [price, setPrice] = useState('');
  // const [image, setImage] = useState(null); // Uncomment if handling images
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: title,
      description,
      date,
      time,
      location,
      organizer,
      price: parseFloat(price), // Ensure price is correctly formatted as a number
      // image, // Uncomment if handling images
    };

    axios
      .post("http://localhost:3000/events", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to create event");
      });
  };

  return (
    <div>
      <main>
        <div className={styles.allform}>
          <h1>Create an event</h1>
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

            {/* Uncomment if handling images */}
            {/* <label htmlFor="image">Image</label>
            <input
              type="file"
              id="image"
              onChange={(e) => setImage(e.target.files[0])}
            /> */}

            <button type="submit">Create Event</button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default CreateComp;