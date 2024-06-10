import Hero from "../components/Hero/Hero";
import Event from "../components/Event/Event";
import Banner from "../components/Banner/Banner";

function Home() {
  return (
    <div>
      <Hero />
      <main>
        <h1 className="headerss">Upcoming Events</h1>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Event />
          <Event />
          <Event />
          <Event />
        </div>
      </main>
      <Banner />
    </div>
  );
}

export default Home;
