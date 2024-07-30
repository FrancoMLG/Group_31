import React, {useEffect, useState} from "react";
import {fetchTicket, updateTicket} from "../../api";
import {useLocation, useParams} from "react-router-dom";
import UserSideBar from "../dashboards/user/user_sidebar";
import TechSideBar from "../dashboards/tech/tech_sidebar";
import AdminSideBar from "../dashboards/admin/admin_sidebar";

const TicketDetail = () => {
  const {id} = useParams();
  const [ticket, setTicket] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newMessage, setNewMessage] = useState("");

  const [actionTrigger, setActionTrigger] = useState(false);

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const location = useLocation();

  useEffect(() => {
    fetchTicket(id)
      .then((response) => {
        setTicket(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [id, newMessage, actionTrigger]);

  const handleMessageSubmit = (event) => {
    event.preventDefault();
    const messageData = {
      sender: user.result._id,
      message: newMessage,
      createdAt: new Date().toISOString(),
    };

    updateTicket(id, {...ticket, messages: [...ticket.messages, messageData]})
      .then((response) => {
        setTicket((prevTicket) => ({
          ...prevTicket,
          messages: [...prevTicket.messages, response.data],
        }));
        setNewMessage("");
      })
      .catch((error) => {
        setError(error);
      });
  };

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  const unassignTicket = async (ticketId) => {
    setActionTrigger(!actionTrigger);
    try {
      await updateTicket(ticketId, {
        status: "Open",
        technician: null,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const assignTicket = async (ticketId) => {
    setActionTrigger(!actionTrigger);
    try {
      await updateTicket(ticketId, {
        status: "Assigned",
        technician: user?.result._id,
      });
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading ticket: {error.message}</p>;

  return (
    <div className="container-fluid bg-body-tertiary vh-100 d-flex flex-column no-padding">
      <div className="row flex-grow-1">
        <div className="col-auto">
          {user?.result.permissionLevel === "user" && <UserSideBar />}
          {user?.result.permissionLevel === "technician" && <TechSideBar />}
          {user?.result.permissionLevel === "admin" && <AdminSideBar />}
        </div>
        <div className="col overflow-auto">
          <div className="p-3">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h1>Ticket Details</h1>

              {((user?.result.permissionLevel === "technician" &&
                ticket.technician?._id === user?.result._id) ||
                user?.result.permissionLevel === "admin") && (
                <button
                  className="btn btn-danger"
                  onClick={() => unassignTicket(ticket._id)}>
                  Unassign
                </button>
              )}

              {user?.result.permissionLevel === "technician" &&
                !ticket.technician?._id && (
                  <button
                    className="btn btn-primary"
                    onClick={() => assignTicket(ticket._id)}>
                    Assign
                  </button>
                )}
            </div>
            {ticket && (
              <div className="card shadow-sm p-4">
                <h2 className="mb-3">{ticket.description}</h2>
                <p>
                  Status: <strong>{ticket.status}</strong>
                </p>
                <p>
                  Category: <strong>{ticket.category}</strong>
                </p>
                <p>
                  Creator:{" "}
                  <strong>{`${ticket.creator.firstName} ${ticket.creator.lastName}`}</strong>
                </p>
                <p>
                  Technician:{" "}
                  <strong>
                    {ticket.technician
                      ? `${ticket.technician.firstName} ${ticket.technician.lastName}`
                      : "Unassigned"}
                  </strong>
                </p>
                <h3 className="mt-4">Messages:</h3>
                <ul className="list-group mb-4">
                  {ticket.messages
                    .sort(
                      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
                    )
                    .reverse()
                    .map((msg, index) => (
                      <li key={index} className="list-group-item">
                        <p>
                          <strong>
                            {`${msg.sender?.firstName} ${msg.sender?.lastName}`}
                            :
                          </strong>{" "}
                          {msg.message}
                        </p>
                        <p className="text-muted">
                          {new Date(msg.createdAt).toLocaleString()}
                        </p>
                      </li>
                    ))}
                </ul>
                <form onSubmit={handleMessageSubmit}>
                  <div className="mb-3">
                    <label htmlFor="newMessage" className="form-label">
                      Add a Message
                    </label>
                    <textarea
                      id="newMessage"
                      className="form-control"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      rows="3"
                      required></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Send Message
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketDetail;
