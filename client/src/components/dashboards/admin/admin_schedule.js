import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import AdminSideBar from "./admin_sidebar";

export default function AdminSchedule() {
  const activeLinkId = "schedule-link";

  return (
    <div className="container-fluid bg-body-tertiary vh-100 d-flex flex-column no-padding">
      <div className="row flex-grow-1">
        <div className="col-auto">
          <AdminSideBar activeLinkId={activeLinkId} />
        </div>
        <div className="col overflow-auto">

          <p>Insert More Content Here!</p>

        </div>
      </div>
    </div>
  );
}
