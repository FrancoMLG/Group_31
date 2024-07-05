import React, {useState} from "react";
import "./signin.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {signIn} from "../../api";
import {useNavigate} from "react-router-dom";

const SigninForm = () => {
  const navigate = useNavigate();

  return (


      <div className="container-fluid bg-body-tertiary">

        <nav className="navbar navbar-expand-lg fixed-top bg-body-secondary">
          <div className="container-fluid">
            <a className="navbar-brand mx-2" href="#"> <img src={`${process.env.PUBLIC_URL}/images/calendar-week.svg`} height="30"/> Fake Company Name</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </nav>



        <main className="container py-5">
          <div className="row justify-content-center mt-5 py-5">
            <div className="col-sm-8 col-md-6 col-lg-4 py-5">
              <div className="form-signin">
                <form>
                  <img className="mb-4" src={`${process.env.PUBLIC_URL}/images/calendar-week.svg`} alt="" width="72" height="57" />
                  <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                  <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label htmlFor="floatingInput">Email address</label>
                  </div>
                  <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                    <label htmlFor="floatingPassword">Password</label>
                  </div>

                  <div className="form-check text-start my-3">
                    <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                      Remember me
                    </label>
                  </div>
                  <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
                  <p className="mt-5 mb-3 text-body-secondary">© 2017–2024</p>
                </form>
              </div>
            </div>
          </div>
        </main>

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
};

export default SigninForm;
