import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React, {useState, useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import TechSideBar from "./tech_sidebar";
import "./tech_home.css";
import {fetchTicketsByTechnician, updateTicket} from "../../../api";
import DashHeader from "../dash_header";
import {formatDate, getNextAvailableTime} from "./utils";

export default function TechHome() {
  const activeLinkId = "home-link";
  const navigate = useNavigate();
  const [tickets, setTickets] = useState([]);
  const [selectedTimes, setSelectedTimes] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("profile"));
        if (!user) return;
        const data = await fetchTicketsByTechnician(user.result._id);
        setTickets(data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const unassignTicket = async (ticketId, event) => {
    event.stopPropagation();
    try {
      const user = JSON.parse(localStorage.getItem("profile"));
      await updateTicket(ticketId, {
        status: "Open",
        startTime: null,
        endTime: null,
        technician: null,
      });
      const data = await fetchTicketsByTechnician(user.result._id);
      setTickets(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleTimeSelect = async (ticketId, startTime, endTime, event) => {
    event.stopPropagation();
    try {
      await updateTicket(ticketId, {
        startTime,
        endTime,
      });
      const user = JSON.parse(localStorage.getItem("profile"));
      const data = await fetchTicketsByTechnician(user.result._id);
      setTickets(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleTimeChange = async (ticketId, value, event) => {
    event.stopPropagation();
    const duration = parseInt(value, 10);

    try {
      const user = JSON.parse(localStorage.getItem("profile"));
      const data = await fetchTicketsByTechnician(user.result._id);
      const tickets = data.data;

      const otherTickets = tickets.filter((ticket) => ticket._id !== ticketId);

      let latestEndTime = new Date();
      otherTickets.forEach((ticket) => {
        const ticketEndTime = new Date(ticket.endTime);
        if (ticketEndTime > latestEndTime) {
          latestEndTime = ticketEndTime;
        }
      });

      const nextAvailableTime = getNextAvailableTime(latestEndTime, duration);
      const endTime = new Date(nextAvailableTime.getTime() + duration * 60000); // duration is in minutes

      setSelectedTimes((prevTimes) => ({
        ...prevTimes,
        [ticketId]: {startTime: nextAvailableTime, endTime},
      }));

      handleTimeSelect(ticketId, nextAvailableTime, endTime, event);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container-fluid bg-body-tertiary vh-100 d-flex flex-column no-padding">
      <div className="row flex-grow-1">
        <div className="col-auto">
          <TechSideBar activeLinkId={activeLinkId} />
        </div>
        <div className="col overflow-auto" style={{paddingRight: "5%"}}>
          <DashHeader headerText={"Home"} />
          <div className="TechIntro">
            <br />
            <p>
              Welcome to your Technician dashboard! Below are the tickets that
              you have been assigned. Please enter the time that you estimate
              that you need to resolve each. After you have done this, they will
              be added to your calendar schedule.
            </p>
            <p>
              Use the sidebar to navigate to the different sections of the
              dashboard.
            </p>
          </div>
          {tickets.length > 0 ? (
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th scope="col">Category</th>
                  <th scope="col">Created At</th>
                  <th scope="col">Status</th>
                  <th scope="col">Estimated Time</th>
                  <th scope="col">Start Time</th>
                  <th scope="col">End Time</th>
                </tr>
              </thead>
              <tbody>
                {tickets.map(
                  (ticket) =>
                    ticket.status !== "Closed" && (
                      <tr
                        key={ticket._id}
                        onClick={() => navigate(`/ticket/${ticket._id}`)}>
                        <td>{ticket.category}</td>
                        <td>{formatDate(ticket.createdAt)}</td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={(event) =>
                              unassignTicket(ticket._id, event)
                            }>
                            Unassign
                          </button>
                        </td>
                        <td>
                          <select
                            className="form-select fixed-size-dropdown"
                            onClick={(event) => event.stopPropagation()}
                            onChange={(event) =>
                              handleTimeChange(
                                ticket._id,
                                event.target.value,
                                event
                              )
                            }>
                            <option value="">Select time</option>
                            <option value="30">30 minutes</option>
                            <option value="45">45 minutes</option>
                            <option value="60">60 minutes</option>
                          </select>
                        </td>
                        <td>
                          {ticket.startTime
                            ? formatDate(ticket.startTime)
                            : "N/A"}
                        </td>
                        <td>
                          {ticket.endTime ? formatDate(ticket.endTime) : "N/A"}
                        </td>
                      </tr>
                    )
                )}
              </tbody>
            </table>
          ) : (
            <p>No tickets found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
