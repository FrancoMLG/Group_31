import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {Link, useNavigate} from "react-router-dom";
import React from "react";
import "./userdash.css";

export default function UserDash() {
  // const navigate = useNavigate();

  const signedIn = localStorage.getItem("profile");

  return (
    <div className="container-fluid bg-body-tertiary vh-100 d-flex flex-column no-padding">
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
            <a href="#" className="nav-link active" aria-current="page">
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
            <a href="#" className="nav-link link-body-emphasis">
              <img
                className="padded-img"
                src={`${process.env.PUBLIC_URL}/images/house.svg`}
                height="20"
                alt="Fake Company Logo"
              />
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="nav-link link-body-emphasis">
              <img
                className="padded-img"
                src={`${process.env.PUBLIC_URL}/images/house.svg`}
                height="20"
                alt="Fake Company Logo"
              />
              Orders
            </a>
          </li>
          <li>
            <a href="#" className="nav-link link-body-emphasis">
              <img
                className="padded-img"
                src={`${process.env.PUBLIC_URL}/images/house.svg`}
                height="20"
                alt="Fake Company Logo"
              />
              Products
            </a>
          </li>
          <li>
            <a href="#" className="nav-link link-body-emphasis">
              <img
                className="padded-img"
                src={`${process.env.PUBLIC_URL}/images/house.svg`}
                height="20"
                alt="Fake Company Logo"
              />
              Customers
            </a>
          </li>
        </ul>
        <div className="dropdown mt-auto">
          <a
            href="#"
            className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false">
            <img
              src={`${process.env.PUBLIC_URL}/images/person-circle-dark.svg`}
              alt=""
              width="32"
              height="32"
              className="rounded-circle me-2"></img>
            Username Here
          </a>
          <ul className="dropdown-menu text-small shadow">
            <li>
              <a className="dropdown-item" href="#">
                User options?
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Maybe get rid of this
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
