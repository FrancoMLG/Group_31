import {BrowserRouter, Route, Routes} from "react-router-dom";
import Homepage from "./components/homepage";
import SignupForm from "./components/Auth/signup";
import SigninForm from "./components/Auth/signin";
import Navbar from "./components/navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/signin" element={<SigninForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
