import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {Link, useNavigate} from "react-router-dom";
import React, {useEffect, useRef} from "react";
import UserSideBar from "./user_sidebar";
import "./user_sched.css";
import MaintenanceRequestForm from "../../tickets/userticket";

export default function UserSchedule() {
  const activeLinkId = "schedule-link";

  return (
    <div className="container-fluid bg-body-tertiary vh-100 d-flex flex-column no-padding">
      <div className="row flex-grow-1">
        <div className="col-auto">
          <UserSideBar activeLinkId={activeLinkId} />
        </div>
        <div className="col overflow-auto">
          {/* <p>Insert More Content Here!</p> */}
          <MaintenanceRequestForm />
        </div>
      </div>
    </div>
  );
}
