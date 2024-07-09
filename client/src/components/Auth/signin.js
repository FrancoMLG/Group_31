import React, {useState} from "react";
import "./signin.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {useNavigate, Link} from "react-router-dom";
import {signIn} from "../../api";

const SigninForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const errors = {};
    if (!formData.email) errors.email = "Email is required";
    if (!formData.password) errors.password = "Password is required";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      try {
        const {data} = await signIn(formData);
        localStorage.setItem("profile", JSON.stringify(data));
        navigate("/");
      } catch (error) {
        console.log(error);
        alert(error.response.data.message);
      }
    }
  };

  return (
    <div className="container-fluid bg-body-tertiary">
      <nav className="navbar navbar-expand-lg fixed-top bg-body-secondary" style={{paddingTop: "0"}}>
        <div className="container-fluid">
          <Link className="navbar-brand mx-2" to="/">
            <img
              src={`${process.env.PUBLIC_URL}/images/calendar-week.svg`}
              height="30"
              alt="Fake Company Logo"
              style={{paddingRight: "10px"}}
            />
            Fake Company Name
          </Link>
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
        </div>
      </nav>

      <main className="container py-5">
        <div className="row justify-content-center mt-5 py-5">
          <div className="col-sm-8 col-md-6 col-lg-4 py-5">
            <div className="form-signin">
              <form onSubmit={handleSubmit}>
                <img
                  className="mb-4"
                  src={`${process.env.PUBLIC_URL}/images/calendar-week.svg`}
                  alt=""
                  width="72"
                  height="57"
                />
                <h1 className="h3 mb-3 fw-normal">Sign In</h1>

                <div className="form-floating py-2">
                  <input
                    value={formData.email}
                    onChange={handleChange}
                    name="email"
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                  <input
                    value={formData.password}
                    onChange={handleChange}
                    name="password"
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label htmlFor="floatingPassword">Password</label>
                </div>


                <button className="btn btn-primary w-100 my-2 py-2" type="submit">
                  Sign in
                </button>
                <p className="mt-5 mb-3 text-body-secondary">© 2017–2024</p>
              </form>
            </div>
          </div>
        </div>
      </main>

      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <Link
              to="/"
              className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
              <img
                src={`${process.env.PUBLIC_URL}/images/calendar-week.svg`}
                height="30"
                alt="Company Logo"
              />
            </Link>
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
