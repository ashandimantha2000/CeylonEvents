import styles from "./AboutComp.module.scss";

function AboutComp() {
  return (
    <div>
      <div className={styles.about}>
        <h1>About Ceylon Events</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          malesuada, urna nec pharetra tincidunt, libero mauris aliquet nunc,
          nec vulputate nunc erat ac justo. Nam auctor, metus vitae ultrices
          vestibulum, nunc libero tincidunt nunc, nec lacinia purus nunc a odio.
          Nullam nec turpis nec odio tincidunt interdum. Sed nec nunc nec libero
          tincidunt fermentum. Nullam nec turpis nec odio tincidunt interdum.
          Sed nec nunc nec libero tincidunt fermentum.
        </p>
        <div className={styles.images}>
          <img
            src="https://images.pexels.com/photos/12745513/pexels-photo-12745513.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
          <img
            src="https://media.istockphoto.com/id/1357248261/photo/crowd-of-people-dancing-in-a-concert.webp?b=1&s=170667a&w=0&k=20&c=SiO5dLJA8Gh7Wymv2Vsp_fdjgbrvxqdnQzCP3ZDHK60="
            alt=""
          />
          <img
            src="https://media.istockphoto.com/id/1489238048/photo/large-group-of-people-at-a-concert-party.webp?b=1&s=170667a&w=0&k=20&c=FF5pc9Vp67lqmEYR0vJePWoUXjJdvWbqoQ4H9inAKKM="
            alt=""
          />
        </div>
        <div className={styles.data}>
          <h3>
            Hotline: <span>+94 71 688 0000</span>
          </h3>
          <h3>
            Email: <span>info@ceylonevents.lk</span>
          </h3>
          <h3>
            Website: <span>+www.ceylonevents.lk</span>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default AboutComp;
