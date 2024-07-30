import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useRef } from "react";
import UserSideBar from "./user_sidebar";
import "./user_support.css";
import DashHeader from "../dash_header";

export default function UserSupport() {
  const activeLinkId = "support-link";

  return (
    <div className="container-fluid bg-body-tertiary vh-100 d-flex flex-column no-padding">
      <div className="row flex-grow-1">
        <div className="col-auto">
          <UserSideBar activeLinkId={activeLinkId} />
        </div>
        <div className="col overflow-auto">

          <DashHeader headerText={"Contact Support"} />
		  <p classname="lead">If you want to get in touch with one of our technicians then you can submit a help ticket under "Schedule Appointment" and we will address your issue 
		  a soon as possible. Furthermore, you can also get in touch right away without submitting a ticket through our live chat which is found under "Chat".</p>

        </div>
      </div>
    </div>
  );
}
