import Hero from "../components/Hero/Hero";
import Event from "../components/Event/Event";
import Banner from "../components/Banner/Banner";
import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/Footer/Footer";

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
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Home;
