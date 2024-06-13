import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Nav from "../components/Nav/Nav";
import Events from "../pages/Events";
import Footer from "../components/Footer/Footer";

function UserRoutes() {
  return (
     <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} /> {/* Remove the leading slash */}
      </Routes>
      <Footer />
    </>
  );
}

export default UserRoutes;
