import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {Link, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import TechSideBar from "./tech_sidebar";
import {fetchTickets, updateTicket} from "../../../api";

export default function TechTickets() {
  const activeLinkId = "tickets-link";
  const navigate = useNavigate();
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTickets();
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

  const assignTicket = async (ticketId) => {
    try {
      const user = JSON.parse(localStorage.getItem("profile"));
      await updateTicket(ticketId, {
        status: "Assigned",
        technician: user.result._id,
      });
      const data = await fetchTickets();
      setTickets(data.data);
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
        <div className="col overflow-auto">
          {tickets.filter((ticket) => ticket.status === "Open").length > 0 ? (
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th scope="col">Category</th>
                  <th scope="col">Description</th>
                  <th scope="col">Created At</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {tickets.map(
                  (ticket) =>
                    ticket.status === "Open" && (
                      <tr
                        key={ticket._id}
                        onClick={() => navigate(`/ticket/${ticket._id}`)}>
                        <td>{ticket.category}</td>
                        <td>{ticket.description}</td>
                        <td>{formatDate(ticket.createdAt)}</td>
                        <td>
                          <button
                            className="btn btn-primary"
                            onClick={() => assignTicket(ticket._id)}>
                            Assign
                          </button>
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
