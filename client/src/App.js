import {BrowserRouter, Route, Routes} from "react-router-dom";
import Homepage from "./components/homepage";
import SignupForm from "./components/Auth/signup";
import SigninForm from "./components/Auth/signin";
import Navbar from "./components/navbar";
<<<<<<< HEAD
import About from "./components/about";
=======
import UserDash from "./components/dashboards/userdash";
import TechDash from "./components/dashboards/techdash";
import AdminDash from "./components/dashboards/admindash";
>>>>>>> 5f46906229b33a64c934e478b715face774407d0

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/signin" element={<SigninForm />} />
<<<<<<< HEAD
=======
        <Route path="/userdash" element={<UserDash />} />
        <Route path="/techdash" element={<TechDash />} />
        <Route path="/admindash" element={<AdminDash />} />
>>>>>>> 5f46906229b33a64c934e478b715face774407d0
      </Routes>
    </BrowserRouter>
  );
}

export default App;
