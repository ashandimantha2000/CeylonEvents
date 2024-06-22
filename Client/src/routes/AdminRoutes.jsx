import { Route, Routes } from "react-router-dom"
import Dashboard from "../pages/Admin/Dashboard";
import AdminLogin from "../pages/Admin/AdminLogin";
import AdminEdit from "../pages/Admin/AdminEdit";

function adminRoutes() {
  return (
    <>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<AdminLogin />} />
        <Route path="/admin/edit" element={<AdminEdit />} />
      </Routes>
    </>
  )
}

export default adminRoutes