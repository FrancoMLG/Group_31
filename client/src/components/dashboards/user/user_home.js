import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import UserSideBar from "./user_sidebar";
import DashHeader from "../dash_header";
import "./user_home.css";

export default function UserHome() {
	const activeLinkId = "home-link";

	return (
		<div className="container-fluid bg-body-tertiary vh-100 d-flex flex-column no-padding">
			<div className="row flex-grow-1">
				<div className="col-auto">
					<UserSideBar activeLinkId={activeLinkId} />
				</div>
				<div className="col overflow-auto">
					<DashHeader headerText={"Home"} />

					<br />
          <p>
							Welcome to your User dashboard! Use the sidebar to navigate to the different sections of the
							dashboard.
						</p>
				</div>
			</div>
		</div>
	);
}
