import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Nav from "../components/Nav/Nav";

function UserRoutes() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default UserRoutes;
