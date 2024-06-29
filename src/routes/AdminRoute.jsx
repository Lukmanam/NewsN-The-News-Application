import { Route,Routes } from "react-router-dom"
import AdminLogin from "../components/adminComoponents/AdminLogin"
const AdminRoute = () => {
  return (
    <Routes>
        <Route path="/" element={<AdminLogin/>}/>
    </Routes>
  )
}

export default AdminRoute
