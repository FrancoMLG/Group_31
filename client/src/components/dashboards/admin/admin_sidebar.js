import React, {useEffect, useState} from "react";
import "./admin_sidebar.css";
import {useLocation, useNavigate} from "react-router-dom";
import {jwtDecode} from "jwt-decode";

export default function AdminSideBar({activeLinkId}) {
  const navigate = useNavigate();
  const location = useLocation();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  useEffect(() => {
    const activeLink = document.getElementById(activeLinkId);
    if (activeLink) {
      activeLink.classList.add("active");
      activeLink.classList.remove("link-body-emphasis");
      activeLink.setAttribute("aria-current", "page");
    }
  }, [activeLinkId]);

  const logout = () => {
    localStorage.clear();
    setUser(null);
    navigate("/");
  };

  useEffect(() => {
    if (!user || user.result.permissionLevel !== "admin") {
      navigate("/");
    }
    const token = user?.token;
    if (token) {
      const decodedToken = jwtDecode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
    setUser(JSON.parse(localStorage.getItem("profile")));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 bg-body-secondary"
      style={{width: "280px", height: "100%"}}>
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <img
          className="padded-img"
          src={`${process.env.PUBLIC_URL}/images/calendar-week.svg`}
          height="30"
          alt="Fake Company Logo"
        />
        <span className="fs-4">Dashboard</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <a
            href="#"
            id="home-link"
            className="nav-link link-body-emphasis"
            onClick={() => navigate("/adminhome")}>
            <img
              className="padded-img"
              src={`${process.env.PUBLIC_URL}/images/house.svg`}
              height="20"
              alt="Fake Company Logo"
            />
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            id="schedule-link"
            className="nav-link link-body-emphasis"
            onClick={() => navigate("/adminschedule")}>
            <img
              className="padded-img"
              src={`${process.env.PUBLIC_URL}/images/calendar-event.svg`}
              height="20"
              alt="Fake Company Logo"
            />
            View Schedules
          </a>
        </li>
        <li>
          <a
            href="#"
            id="grant-link"
            className="nav-link link-body-emphasis"
            onClick={() => navigate("/admingrant")}>
            <img
              className="padded-img"
              src={`${process.env.PUBLIC_URL}/images/person-check.svg`}
              height="20"
              alt="Fake Company Logo"
            />
            Grant Privileges
          </a>
        </li>
      </ul>
      <div className="dropdown mt-auto">
        <a
          className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false">
          <img
            src={`${process.env.PUBLIC_URL}/images/person-workspace-dark.svg`}
            alt=""
            width="32"
            height="32"
            className="me-2"></img>
          {user?.result.firstName} {user?.result.lastName}
        </a>
        <ul className="dropdown-menu text-small shadow">
          <li>
            <a className="dropdown-item" href="#" onClick={logout}>
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
