import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../App.css";
import {useNavigate, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {jwtDecode} from "jwt-decode";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const logout = () => {
    localStorage.clear();
    setUser(null);
    navigate("/");
  };

  useEffect(() => {
    const token = user?.token;
    if (token) {
      const decodedToken = jwtDecode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
    setUser(JSON.parse(localStorage.getItem("profile")));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-body-secondary" style={{paddingTop: "0"}}>
      <div className="container-fluid">
        <a className="navbar-brand mx-2" href="#">
          <img
            src={`${process.env.PUBLIC_URL}/images/calendar-week.svg`}
            height="30"
            style={{paddingRight: "10px"}}
          />
          Fake Company Name
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                Roles
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    User
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Technician
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Administrator
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          {!user ? (
            <form className="d-flex" role="search">
              <button
                className="btn btn-primary mx-2"
                type="submit"
                onClick={() => navigate("/signin")}>
                Sign In
              </button>
              <button
                className="btn btn-outline-secondary"
                type="submit"
                onClick={() => navigate("/signup")}>
                Sign Up
              </button>
            </form>
          ) : (
            <>
              {`Welcome, ${user.result.firstName}!`}
              <button
                className="btn btn-primary mx-2"
                type="submit"
                onClick={logout}>
                Log Out
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
