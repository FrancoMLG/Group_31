import {BrowserRouter, Route, Routes} from "react-router-dom";
import Homepage from "./components/homepage";
import SignupForm from "./components/Auth/signup";
import SigninForm from "./components/Auth/signin";
import Navbar from "./components/navbar";
import UserHome from "./components/dashboards/user/user_home";
import UserAppointments from "./components/dashboards/user/user_appts";
import UserSchedule from "./components/dashboards/user/user_sched";
import UserSupport from "./components/dashboards/user/user_support";
import UserChat from "./components/dashboards/user/user_chat";
import TechHome from "./components/dashboards/tech/techhome";
import AdminDash from "./components/dashboards/admin/adminhome";
import UserTicket from "./components/tickets/userticket";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/signin" element={<SigninForm />} />
        <Route path="/userhome" element={<UserHome />} />
        <Route path="/userappts" element={<UserAppointments />} />
        <Route path="/usersched" element={<UserSchedule />} />
        <Route path="/usersupport" element={<UserSupport />} />
        <Route path="/userchat" element={<UserChat />} />
        <Route path="/techhome" element={<TechHome />} />
        <Route path="/adminhome" element={<AdminDash />} />
        <Route path="/userticket" element={<UserTicket />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;