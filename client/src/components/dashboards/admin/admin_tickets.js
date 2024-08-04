import React, { useEffect, useState } from "react";
import { fetchUsers, fetchTickets, updateTicket } from "../../../api";
import AdminSideBar from "./admin_sidebar";
import DashHeader from "../dash_header";
import { getNextAvailableTime } from './utils';

export default function AdminTickets() {
    const activeLinkId = "tickets-link";
    const [technicians, setTechnicians] = useState([]);
    const [selectedTechnician, setSelectedTechnician] = useState("all");
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        fetchUsers()
            .then((response) => {
                const techs = response.data.filter(
                    (user) => user.permissionLevel === "technician"
                );
                setTechnicians(techs);
            })
            .catch((error) => {
                console.error("Error fetching technicians:", error);
            });

        fetchTickets()
            .then((response) => {
                setTickets(response.data);
            })
            .catch((error) => {
                console.error("Error fetching tickets:", error);
            });
    }, []);

    const handleTechnicianChange = (event) => {
        setSelectedTechnician(event.target.value);
    };

    const handleTicketAssignment = async (ticketId, technicianId) => {
        try {
            const technicianTickets = tickets.filter(ticket => ticket.technician === technicianId);

            const currentTime = new Date();
            const lastTicketEndTime = technicianTickets.length > 0 
                ? new Date(Math.max(...technicianTickets.map(ticket => new Date(ticket.endTime).getTime())))
                : currentTime;
            const startTime = getNextAvailableTime(lastTicketEndTime, 30);
            const endTime = new Date(startTime.getTime() + 30 * 60000); // 30 minutes later

            await updateTicket(ticketId, {
                technician: technicianId,
                status: technicianId ? "Assigned" : "Open",
                startTime: startTime.toISOString(),
                endTime: endTime.toISOString(),
            });

            // Fetch updated tickets
            const updatedTickets = await fetchTickets();
            setTickets(updatedTickets.data);
        } catch (error) {
            console.error("Error updating ticket:", error);
        }
    };

    const unassignTicket = async (ticketId) => {
        try {
            await updateTicket(ticketId, {
                technician: null,
                status: "Open",
                startTime: null,
                endTime: null,
            });
            const updatedTickets = await fetchTickets();
            setTickets(updatedTickets.data);
        } catch (error) {
            console.error("Error unassigning ticket:", error);
        }
    };

    const filteredTickets =
        selectedTechnician === "all"
            ? tickets
            : selectedTechnician === "unassigned"
            ? tickets.filter((ticket) => ticket.status === "Open")
            : tickets.filter((ticket) => ticket.technician === selectedTechnician);

    return (
        <div className="container-fluid bg-body-tertiary vh-100 d-flex flex-column no-padding">
            <div className="row flex-grow-1">
                <div className="col-auto">
                    <AdminSideBar activeLinkId={activeLinkId} />
                </div>
                <div className="col overflow-auto" style={{ marginRight: "20px" }}>
                    <DashHeader headerText={"Tickets"} />

                    <div className="mb-3">
                        <select
                            value={selectedTechnician}
                            onChange={handleTechnicianChange}
                            className="form-select"
                        >
                            <option value="all">All Tickets</option>
                            <option value="unassigned">Unassigned Tickets</option>
                            {technicians.map((tech) => (
                                <option key={tech._id} value={tech._id}>
                                    {tech.firstName} {tech.lastName}
                                </option>
                            ))}
                        </select>
                    </div>

                    {filteredTickets.length > 0 ? (
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th scope="col" style={{ width: '15%' }}>
                                        Category
                                    </th>
                                    <th scope="col" style={{ width: '20%' }}>
                                        Created At
                                    </th>
                                    <th scope="col" style={{ width: '20%' }}>
                                        Description
                                    </th>
                                    <th scope="col" style={{ width: '15%' }}>
                                        Status
                                    </th>
                                    <th scope="col" style={{ width: '20%' }}>
                                        Technician
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredTickets.map((ticket) => (
                                    <tr key={ticket._id}>
                                        <td>{ticket.category}</td>
                                        <td>{new Date(ticket.createdAt).toLocaleString()}</td>
                                        <td>{ticket.description.substring(0, 20)}...</td>
                                        <td>
                                            {ticket.status === "Assigned" ? (
                                                <button
                                                    className="btn btn-danger"
                                                    onClick={() => unassignTicket(ticket._id)}
                                                >
                                                    Unassign
                                                </button>
                                            ) : (
                                                "Open"
                                            )}
                                        </td>
                                        <td>
                                            {ticket.status === "Assigned" ? (
                                                <span>
                                                    {
                                                        technicians.find(
                                                            (tech) => tech._id === ticket.technician
                                                        )?.firstName
                                                    }{" "}
                                                    {
                                                        technicians.find(
                                                            (tech) => tech._id === ticket.technician
                                                        )?.lastName
                                                    }
                                                </span>
                                            ) : (
                                                <select
                                                    className="form-select"
                                                    style={{ width: "200px" }}
                                                    value={ticket.technician || ""}
                                                    onChange={(event) =>
                                                        event.target.value === ""
                                                            ? unassignTicket(ticket._id)
                                                            : handleTicketAssignment(
                                                                ticket._id,
                                                                event.target.value
                                                            )
                                                    }
                                                    disabled={ticket.status === "Assigned"}
                                                >
                                                    <option value="">Unassigned</option>
                                                    {technicians.map((tech) => (
                                                        <option key={tech._id} value={tech._id}>
                                                            {tech.firstName} {tech.lastName}
                                                        </option>
                                                    ))}
                                                </select>
                                            )}
                                        </td>
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