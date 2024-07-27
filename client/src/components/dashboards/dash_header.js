import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React from "react";
import "./dash_header.css";

export default function DashHeader({headerText}) {

  return (

      <nav className="navbar navbar-expand-lg bg-body-primary">
        <div className="container-fluid d-flex flex-column align-items-center">
          <a className="navbar-brand my-navbar-brand" href="#">{headerText}</a>
          <hr className="my-navbar-hr" />
        </div>
      </nav>

  );
}
