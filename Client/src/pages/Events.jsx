import React from "react";
import Hero from "../components/Hero/Hero";
import Event from "../components/Event/Event";
import Banner from "../components/Banner/Banner";
import Newsletter from "../components/Newsletter/Newsletter";
import EventDetails from "../components/Event/EventDetails";

function Events() {
  return (
    <div>
      <EventDetails />
      <main>
        
        <Event />
      </main>
      <Banner />
      <Newsletter />
    </div>
  );
}

export default Events;
