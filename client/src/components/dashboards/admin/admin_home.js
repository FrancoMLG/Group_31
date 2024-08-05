import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import AdminSideBar from "./admin_sidebar";
import DashHeader from "../dash_header";

export default function AdminHome() {
	const activeLinkId = "home-link";

	return (
		<div className="container-fluid bg-body-tertiary vh-100 d-flex flex-column no-padding">
			<div className="row flex-grow-1">
				<div className="col-auto">
					<AdminSideBar activeLinkId={activeLinkId} />
				</div>
				<div className="col overflow-auto">
					<DashHeader headerText={"Home"} />
					<p>
						Welcome to your Admin dashboard! Use the sidebar to navigate to the
						different sections of the dashboard.
					</p>
				</div>
			</div>
		</div>
	);
}
