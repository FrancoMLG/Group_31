import React, {useState, useEffect} from "react";
import "./userticket.css";
import {useNavigate} from "react-router-dom";
import {createTicket} from "../../api";

const MaintenanceRequestForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    description: "",
    creator: "",
    status: "Open",
    category: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const validate = () => {
    let formIsValid = true;
    let errors = {};

    if (!formData.category) {
      errors.category = "Type of issue is required.";
      formIsValid = false;
    }

    if (!formData.description) {
      errors.description = "Description of issue is required.";
      formIsValid = false;
    }

    setFormErrors(errors);
    return formIsValid;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formIsValid = validate();
    if (formIsValid) {
      const user = JSON.parse(localStorage.getItem("profile"));

      const updatedFormData = {
        ...formData,
        creator: user.result._id,
      };

      await createTicket(updatedFormData);
    }
  };
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div id="outside user-ticket">
      <form id="survey-form" onSubmit={handleSubmit}>
        <h1 id="title">Submit a Maintenance Request</h1>
        <p id="description">Please fill out all fields.</p>

        <fieldset>
          <div>
            <label htmlFor="dropdown">Type of issue:</label>
            <select
              id="dropdown"
              name="category"
              value={formData.category}
              onChange={handleChange}>
              <option value="" disabled>
                Select one
              </option>
              <option value="Software">Software</option>
              <option value="Hardware">Hardware</option>
              <option value="Other option">Other option</option>
              <option value="idk">idk</option>
            </select>
            {formErrors.category && (
              <p className="error">{formErrors.category}</p>
            )}
          </div>
        </fieldset>

        <fieldset>
          <div>
            <label htmlFor="msg">Description of issue:</label>
            <br />
            <textarea
              id="msg"
              name="description"
              rows="5"
              cols="50"
              placeholder="Please describe your issue"
              value={formData.description}
              onChange={handleChange}
            />
          </div>
        </fieldset>

        <div id="submitbutton">
          <button type="submit" id="submitformbutton">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default MaintenanceRequestForm;
