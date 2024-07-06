import React, {useState} from "react";
import "./signup.css";
import {signUp} from "../../api/index.js";
import {useNavigate, Link} from "react-router-dom";

const SignupForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const errors = {};
    if (!formData.firstName) errors.firstName = "First name is required.";
    if (!formData.lastName) errors.lastName = "Last name is required.";
    if (!formData.email) errors.email = "Email is required.";
    if (!formData.email) errors.email = "Email is required.";
    // does not actually check email, just format with chars @ chars . chars
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Email must be valid.";
    
    if (!formData.password) errors.password = "Password is required.";
    // checks for 8 chars, 1 num, 1 upper, 1 lower
    else if (
      !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
        formData.password
      )
    )
      errors.password =
        "Password must be at least 8 characters long and include at least one number, one uppercase letter, and one lowercase letter.";

    if (formData.password !== formData.confirmPassword)
      errors.confirmPassword = "Passwords do not match.";

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      try {
        const {data} = await signUp(formData);
        localStorage.setItem("profile", JSON.stringify(data));
        navigate("/");
      } catch (error) {
        console.log(error);
        alert(error.response.data.message);
      }
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <div className="container-fluid bg-body-tertiary">
      <nav className="navbar navbar-expand-lg fixed-top bg-body-secondary">
        <div className="container-fluid">
          <Link className="navbar-brand mx-2" to="/">
            <img
              src={`${process.env.PUBLIC_URL}/images/calendar-week.svg`}
              height="30"
              alt="Fake Company Logo"
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

      <div className="signup-form">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className={`form-control ${
                formErrors.firstName ? "is-invalid" : ""
              }`}
            />
            {formErrors.firstName && (
              <div className="invalid-feedback">{formErrors.firstName}</div>
            )}
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className={`form-control ${
                formErrors.lastName ? "is-invalid" : ""
              }`}
            />
            {formErrors.lastName && (
              <div className="invalid-feedback">{formErrors.lastName}</div>
            )}
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`form-control ${formErrors.email ? "is-invalid" : ""}`}
            />
            {formErrors.email && (
              <div className="invalid-feedback">{formErrors.email}</div>
            )}
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`form-control ${
                formErrors.password ? "is-invalid" : ""
              }`}
            />
            {formErrors.password && (
              <div className="invalid-feedback">{formErrors.password}</div>
            )}
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`form-control ${
                formErrors.confirmPassword ? "is-invalid" : ""
              }`}
            />
            {formErrors.confirmPassword && (
              <div className="invalid-feedback">
                {formErrors.confirmPassword}
              </div>
            )}
          </div>
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
          <p className="mt-5 mb-3 text-body-secondary">© 2017–2024</p>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
