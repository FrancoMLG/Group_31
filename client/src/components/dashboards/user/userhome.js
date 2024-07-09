import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import UserSideBar from "./user_sidebar";
import "./userhome.css"


function setActiveLink() {
    document.getQuerySelector("UserSidebar #home-link").classList.toggle("active");
    document.getQuerySelector("UserSidebar #home-link").classList.toggle('aria-current="page"');
}

export default function UserHome() {
  // const navigate = useNavigate();

  const signedIn = localStorage.getItem("profile");

  // <a href="#" className="nav-link active" aria-current="page"> code for setting active part of dashboard?

  return (
    <div className="container-fluid bg-body-tertiary vh-100 d-flex flex-column no-padding">

      <UserSideBar />

    </div>

  );


}
