import styles from "./CreateComp.module.scss";

function CreateComp() {
  return (
    <div>
      <main>
        <div className={styles.allform}>
          <h1>Create an event</h1>
          <form>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" />
            <label htmlFor="description">Description</label>
            <textarea id="description" name="description" />
            <label htmlFor="price">Price</label>
            <input type="number" id="price" name="price" />
            <label htmlFor="date">Date</label>
            <input type="date" id="date" name="date" />
            <label htmlFor="time">Time</label>
            <input type="time" id="time" name="time" />
            <label htmlFor="image">Image</label>
            <input type="file" id="image" name="image" />
            <button type="submit">Create Event</button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default CreateComp;
