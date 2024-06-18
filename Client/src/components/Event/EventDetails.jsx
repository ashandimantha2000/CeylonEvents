import styles from "./Event.module.scss";
import content from "./Events.json";
import { CiCalendar } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { CiMoneyBill } from "react-icons/ci";

function EventDetails() {
  return (
    <div>
      <div className={styles.hero_img}>
        <img src="https://scontent.fcmb4-2.fna.fbcdn.net/v/t39.30808-6/283861012_1201059000712645_4596136250013189292_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFMRE2drNBAc6cfSumjRWLnqWG6yu11K_qpYbrK7XUr-sG0-IOZiUYgiAiYBT6EjLSDIvbbyeccVmTurxSKZb1n&_nc_ohc=usoHzmkSRGcQ7kNvgHUJXp0&_nc_zt=23&_nc_ht=scontent.fcmb4-2.fna&oh=00_AYD80r2Y9gHn2JzZxDiBmm0_FKji8xDZ7DfpV5ikCELuMQ&oe=6677B24C" alt="home-back" />
      </div>
      <main className={styles.details}>
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
      </main>
    </div>
  );
}

export default EventDetails;
