import styles from "./Newsletter.module.scss";
// Commente here
function Newsletter() {
  return (
    <>
      <main>
        <div className={styles.news}>
          <h2>
            Subscribe to
            <br />- Our Newsletter
          </h2>
          <div className={styles.news_details}>
            <p>
              Get weekly update about our events
              <br />
              on your email, no spam guaranteed we promise ✌️
            </p>
            <form>
              <input type="email" placeholder="  Your Email Address" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </main>
      <div className={styles.back}></div>
    </>
  );
}

export default Newsletter;
