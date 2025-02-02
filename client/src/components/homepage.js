import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../App.css";
import Navbar from "./navbar";
import {useNavigate} from "react-router-dom";

export default function Homepage() {
  const navigate = useNavigate();

  const signedIn = localStorage.getItem("profile");

  return (
    <div className="container-fluid bg-body-tertiary">

      <Navbar />

      <div className="container col-xxl-8 px-2 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={`${process.env.PUBLIC_URL}/images/it_help_desk.svg`}
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              The IT Help Desk Solution You Need
            </h1>
            <p className="lead">
              Forget about manually scheduling appointments for your users. Our
              system will automatically handle the scheduling and assigning of
              appointments to your employees based on the needs of your users,
              as well as including a host of additional features including live
              chat, powerful administrative privileges, and an easy to use
              dashboard for all of your employees.
            </p>
            {!signedIn && (
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <button
                  type="button"
                  className="btn btn-primary btn-lg px-4 me-md-2"
                  onClick={() => navigate("/signin")}>
                  Sign In
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-lg px-4"
                  onClick={() => navigate("/signup")}>
                  Sign Up
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="container px-4 py-5" id="featured-3">
        <h2 className="pb-2 border-bottom">Roles</h2>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <img
                src={`${process.env.PUBLIC_URL}/images/person-circle.svg`}
                className="white-svg"
                height="30"
              />
            </div>
            <h3 className="fs-2 text-body-emphasis">User</h3>
            <p>
              Create an account to schedule and view appointments, access a live
              chat, and receive email updates on your appointments if requested.
            </p>
            <button
              type="button"
              className="btn btn-outline-secondary btn-sm px-4 me-md-2"
              onClick={() => navigate("/userhome")}>
              To User Dashboard
            </button>
          </div>
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <img
                src={`${process.env.PUBLIC_URL}/images/person-gear.svg`}
                className="white-svg"
                height="30"
              />
            </div>
            <h3 className="fs-2 text-body-emphasis">Technician</h3>
            <p>
              View your scheduled appointments, chat and email with your
              customers, and send updates about your work to those who need to
              know.
            </p>
            <button
              type="button"
              className="btn btn-outline-secondary btn-sm px-4 me-md-2"
              onClick={() => navigate("/techhome")}>
              To Technician Dashboard
            </button>
          </div>
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <img
                src={`${process.env.PUBLIC_URL}/images/person-workspace.svg`}
                className="white-svg"
                height="30"
              />
            </div>
            <h3 className="fs-2 text-body-emphasis">Administrator</h3>
            <p>
              View the appointments of your technicians, allocate administrator
              privileges to others, and alter assigned schedules if necessary.
            </p>
            <button
              type="button"
              className="btn btn-outline-secondary btn-sm px-4 me-md-2"
              onClick={() => navigate("/adminhome")}>
              To Admin Dashboard
            </button>
          </div>
        </div>
      </div>

      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <a
              href="/"
              className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
              <img
                src={`${process.env.PUBLIC_URL}/images/calendar-week.svg`}
                height="30"
              />
            </a>
            <span className="mb-3 mb-md-0 text-body-secondary">
              © Cool Coders, Group 31
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}
