import Hero from "../components/Hero/Hero";
import Event from "../components/Event/Event";
import Banner from "../components/Banner/Banner";
import Newsletter from "../components/Newsletter/Newsletter";

function Home() {
  return (
    <div>
      <Hero />
      <main>
        <h1 className="headerss">Upcoming Events</h1>
        <Event />
      </main>
      <Banner />
      <Newsletter />
    </div>
  );
}

export default Home;
