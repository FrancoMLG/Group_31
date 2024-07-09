import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../App.css";
import {useNavigate} from "react-router-dom";

export default function UserDash() {
  const navigate = useNavigate();

  const signedIn = localStorage.getItem("profile");

  return (
    <div className="container-fluid bg-body-tertiary">

    </div>
  );
}