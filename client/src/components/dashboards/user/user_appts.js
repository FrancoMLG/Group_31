import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {Link, useNavigate} from "react-router-dom";
import React, {useEffect, useRef, useState} from "react";
import UserSideBar from "./user_sidebar";
import "./user_appts.css";
import {fetchTicketsByUser} from "../../../api";

export default function UserAppointments() {
  const activeLinkId = "appointments-link";

  const [tickets, setTickets] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("profile"));
        const data = await fetchTicketsByUser(user.result._id);
        console.log(data.data);
        setTickets(data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };

  return (
    <div className="container-fluid bg-body-tertiary vh-100 d-flex flex-column no-padding">
      <div className="row flex-grow-1">
        <div className="col-auto">
          <UserSideBar activeLinkId={activeLinkId} />
        </div>
        <div className="col overflow-auto">
          {tickets.length > 0 ? (
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th scope="col">Category</th>
                  <th scope="col">Description</th>
                  <th scope="col">Status</th>
                  <th scope="col">Created At</th>
                </tr>
              </thead>
              <tbody>
                {tickets.map((ticket) => (
                  <tr key={ticket._id}>
                    <td>{ticket.category}</td>
                    <td>{ticket.description}</td>
                    <td>{ticket.status}</td>
                    <td>{formatDate(ticket.createdAt)}</td>
                  </tr>
                ))}
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
