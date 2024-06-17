import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Nav from "../components/Nav/Nav";
import Events from "../pages/Events";
import Footer from "../components/Footer/Footer";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

function UserRoutes() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </>
  );
}

export default UserRoutes;
