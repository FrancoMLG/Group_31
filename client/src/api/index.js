import axios from "axios";

const api = axios.create({baseURL: "http://localhost:5000"});

api.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

export const fetchTickets = async () => api.get("/tickets");
export const fetchTicket = async (id) => api.get(`/tickets/${id}`);
export const fetchTicketsByUser = async (id) => api.get(`/tickets/user/${id}`);
export const fetchTicketsByTechnician = async (id) =>
  api.get(`/tickets/tech/${id}`);
export const createTicket = async (newTicket) =>
  api.post("/tickets", newTicket);
export const updateTicket = async (id, updatedTicket) =>
  api.patch(`/tickets/${id}`, updatedTicket);

export const signIn = async (formData) => api.post("/users/signin", formData);
export const signUp = async (formData) => api.post("/users/signup", formData);
