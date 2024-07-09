import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import UserSideBar from "./user_sidebar";
import "./userhome.css"

export default function Userhome() {
  // const navigate = useNavigate();

  const signedIn = localStorage.getItem("profile");

  return (
    <div className="container-fluid bg-body-tertiary vh-100 d-flex flex-column no-padding">

      <UserSideBar />

    </div>
  );
}
