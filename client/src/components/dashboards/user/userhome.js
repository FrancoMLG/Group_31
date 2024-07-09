import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useRef } from "react";
import UserSideBar from "./user_sidebar";
import "./userhome.css";

export default function UserHome() {
  const homeLinkRef = useRef(null);

  useEffect(() => {
    if (homeLinkRef.current) {
      homeLinkRef.current.classList.add("active");
      homeLinkRef.current.setAttribute("aria-current", "page");
      homeLinkRef.current.classList.toggle("link-body-emphasis")
    }
  }, []);

  return (
    <div className="container-fluid bg-body-tertiary vh-100 d-flex flex-column no-padding">
      <UserSideBar homeLinkRef={homeLinkRef} />
    </div>
  );
}
