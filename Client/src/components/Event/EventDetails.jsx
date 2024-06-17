import styles from "./Event.module.scss";
import content from "./Events.json";
import { CiCalendar } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { CiMoneyBill } from "react-icons/ci";

function EventDetails() {
  return (
    <div>
      <div className={styles.details}>
        <div className={styles.headline}>
          <h2>Naadhagama 2024</h2>
          <button>Buy Tickets</button>
        </div>
        <div className={styles.details_data}>
          <CiCalendar size={25} color="red" />
          <h5>24 - 06 - 2024</h5>
          <CiClock2 size={25} color="red" />
          <h5>8:00 PM</h5>
          <IoLocationOutline size={25} color="red" />
          <h5>Gregary Park, Nuwara Eliya</h5>
          <CiMoneyBill size={25} color="red" />
          <h5>LKR 6000.00</h5>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur. Elementum scelerisque
          consequat feugiat duis ornare. Velit urna interdum ipsum enim rutrum
          feugiat tellus at amet. Diam scelerisque at pellentesque dui nam.
          Tristique mattis viverra ut tellus commodo. Aliquet bibendum malesuada
          etiam elit in. Ante maecenas leo tellus at. Tempus id at tincidunt
          ultricies ornare eu adipiscing. Sollicitudin a malesuada quis sit
          eleifend sagittis ullamcorper faucibus. Turpis quis id vestibulum
          quisque sed dolor sagittis ultrices ac. A tortor integer orci mattis
          molestie fusce mollis eget at. Urna varius viverra nunc luctus vitae
          aliquet dui netus. Amet ultrices non mattis adipiscing leo. Cras leo
          quis sit eget nulla lorem ut et diam.
        </p>
      </div>
    </div>
  );
}

export default EventDetails;
