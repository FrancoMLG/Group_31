import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import TechSideBar from "./tech_sidebar";
import Calendar from "../../calendar/Calendar";

export default function TechCalendar() {
	const activeLinkId = "calendar-link";

	return (
		<div className="container-fluid bg-body-tertiary vh-100 d-flex flex-column no-padding">
			<div className="row flex-grow-1">
				<div className="col-auto">
					<TechSideBar activeLinkId={activeLinkId} />
				</div>
				<div className="col overflow-auto">
					<br />
					<Calendar />
				</div>
			</div>
		</div>
	);
}
