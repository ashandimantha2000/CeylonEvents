import React from "react";
import Hero from "../components/Hero/Hero";
import Event from "../components/Event/Event";
import Banner from "../components/Banner/Banner";
import Newsletter from "../components/Newsletter/Newsletter";

function Events() {
  return (
    <div>
      <Hero />
      <main>
        <Event />
      </main>
      <Banner />
      <Newsletter />
    </div>
  );
}

export default Events;
