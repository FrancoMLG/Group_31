import {BrowserRouter, Route, Routes} from "react-router-dom";
import Homepage from "./components/homepage";
import SignupForm from "./components/Auth/signup";
import SigninForm from "./components/Auth/signin";
import Navbar from "./components/navbar";
import User_home from "./components/dashboards/user/user_home";
import UserAppointments from "./components/dashboards/user/user_appts";
import TechHome from "./components/dashboards/tech/techhome";
import AdminDash from "./components/dashboards/admin/adminhome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/signin" element={<SigninForm />} />
        <Route path="/userhome" element={<User_home />} />
        <Route path="/userappts" element={<UserAppointments />} />
        <Route path="/techhome" element={<TechHome />} />
        <Route path="/adminhome" element={<AdminDash />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
