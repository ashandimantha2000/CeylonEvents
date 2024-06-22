import { Route, Routes } from "react-router-dom"
import Dashboard from "../pages/Admin/Dashboard";
import AdminLogin from "../pages/Admin/AdminLogin";


function adminRoutes() {
  return (
    <>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<AdminLogin />} />
       
      </Routes>
    </>
  )
}

export default adminRoutes