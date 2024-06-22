import styles from "./Banner.module.scss";
import banner from "../../assets/images/banner.jpeg";

function Banner() {
  return (
    <main>
      <div className={styles.card}>
        <div className={styles.card_data}>
          <h3>Add your own</h3>
          <h1>Events</h1>
          <a href="/create">
            <button>Post an Event</button>
          </a>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            corrupti aspernatur necessitatibus tenetur praesentium magnam, quas
            non ducimus.
          </p>
        </div>
        <img src={banner} alt="" />
      </div>
    </main>
  );
}

export default Banner;
