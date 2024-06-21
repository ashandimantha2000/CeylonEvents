import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Nav from "../components/Nav/Nav";
import Events from "../pages/Events";
import Footer from "../components/Footer/Footer";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import EventDetails from "../components/Event/EventDetails";
import Profile from "../pages/Profile";
import Create from "../pages/Create";
import Edit from "../pages/Edit";

function UserRoutes() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event-details/:_id" element={<EventDetails />} />
        <Route path="/create" element={<Create />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
      <Footer />
    </>
  );
}

export default UserRoutes;
