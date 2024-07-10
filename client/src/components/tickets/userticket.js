import React, {useState} from "react";
import "./userticket.css";
import { useNavigate } from "react-router-dom";

const MaintenanceRequestForm = () => {
    const navigate = useNavigate();
    
    const [issueType, setIssueType] = useState('');
    const [description, setDescription] = useState('');
    
    const [formErrors, setFormErrors] = useState({});

    const validate = () => {
        let formIsValid = true;
        let errors = {};

        if (!issueType) {
            errors.issueType = "Type of issue is required.";
            formIsValid = false;
        }

        if (!description) {
            errors.description = "Description of issue is required.";
            formIsValid = false;
        }

        setFormErrors(errors);
        return formIsValid;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const errors = validate();
        if (Object.keys(errors).length === 0) {
            
        }
        else {
            setFormErrors(errors);
          }
    };

    return (
        <div id="outside user-ticket">
            <form id="survey-form" onSubmit={handleSubmit}>
                <h1 id="title">Submit a Maintenance Request</h1>
                <p id="description">Please fill out all fields.</p>

                <fieldset>
                    <div>
                        <label htmlFor="dropdown">Type of issue:</label>
                        <select id="dropdown" value={issueType} onChange={(e) => setIssueType(e.target.value)}>
                            <option value="" disabled>Select one</option>
                            <option value="Software">Software</option>
                            <option value="Hardware">Hardware</option>
                            <option value="Other option">Other option</option>
                            <option value="idk">idk</option>
                        </select>
                            {formErrors.issueType && <p className="error">{formErrors.issueType}</p>}

                    </div>
                </fieldset>

                <fieldset>
                    <div>
                        <label htmlFor="msg">Description of issue:</label>
                        <br />
                        <textarea id="msg" name="user_message" rows="5" cols="50"
                            placeholder="Please describe your issue"
                            value={description} onChange={(e) => setDescription(e.target.value)} />
                    </div>
                </fieldset>

                <div id="submitbutton">
                    <button type="submit" id="submitformbutton">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default MaintenanceRequestForm;