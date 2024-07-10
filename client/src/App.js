import {BrowserRouter, Route, Routes} from "react-router-dom";
import Homepage from "./components/homepage";
import SignupForm from "./components/Auth/signup";
import SigninForm from "./components/Auth/signin";
import Navbar from "./components/navbar";
import UserDash from "./components/dashboards/userdash";
import TechDash from "./components/dashboards/techdash";
import AdminDash from "./components/dashboards/admindash";
import About from "./components/Auth/about";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/signin" element={<SigninForm />} />
        <Route path="/userdash" element={<UserDash />} />
        <Route path="/techdash" element={<TechDash />} />
        <Route path="/admindash" element={<AdminDash />} />
		<Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;