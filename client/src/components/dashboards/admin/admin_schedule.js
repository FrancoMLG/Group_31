import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {Link, useNavigate} from "react-router-dom";
import React, {useState, useEffect} from "react";
import AdminSideBar from "./admin_sidebar";
import DashHeader from "../dash_header";
import Calendar from "./calendar";
import {fetchUsers} from "../../../api";

export default function AdminSchedule() {
  const activeLinkId = "schedule-link";
  const [technicians, setTechnicians] = useState([]);
  const [selectedTechnician, setSelectedTechnician] = useState(null);

  useEffect(() => {
    fetchUsers()
      .then((response) => {
        const techs = response.data.filter(
          (user) => user.permissionLevel === "technician"
        );
        setTechnicians(techs);
      })
      .catch((error) => {
        console.error("Error fetching technicians:", error);
      });
  }, []);

  const handleTechnicianChange = (event) => {
    setSelectedTechnician(event.target.value);
  };

  const getTechnicianById = (id) => {
    return technicians.find((tech) => tech._id === id);
  };

  return (
    <div className="container-fluid bg-body-tertiary vh-100 d-flex flex-column no-padding">
      <div className="row flex-grow-1">
        <div className="col-auto">
          <AdminSideBar activeLinkId={activeLinkId} />
        </div>
        <div className="col overflow-auto">
          <DashHeader headerText={"Schedule"} />

          <div className="mb-3">
            <select
              value={selectedTechnician || ""}
              onChange={handleTechnicianChange}
              className="form-select">
              <option value="" disabled>
                Select a Technician
              </option>
              {technicians.map((tech) => (
                <option key={tech._id} value={tech._id}>
                  {console.log(tech)}
                  {tech.firstName} {tech.lastName}
                </option>
              ))}
            </select>
            {selectedTechnician && (
              <h5>
                {`${getTechnicianById(selectedTechnician).firstName} ${
                  getTechnicianById(selectedTechnician).lastName
                } hours worked: ${
                  getTechnicianById(selectedTechnician).hoursWorked
                }`}{" "}
              </h5>
            )}
          </div>

          {selectedTechnician && <Calendar technicianId={selectedTechnician} />}
        </div>
      </div>
    </div>
  );
}
