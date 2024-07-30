import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import TechSideBar from "./tech_sidebar";
import DashHeader from "../dash_header";

export default function TechMessages() {
  const activeLinkId = "messages-link";

  return (
    <div className="container-fluid bg-body-tertiary vh-100 d-flex flex-column no-padding">
      <div className="row flex-grow-1">
        <div className="col-auto">
          <TechSideBar activeLinkId={activeLinkId} />
        </div>
        <div className="col overflow-auto">
          <DashHeader headerText={"Ticket Messages"} />

          <p>Insert More Content Here!</p>

        </div>
      </div>
    </div>
  );
}
