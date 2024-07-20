import express from "express";
import {
  getTickets,
  createTicket,
  getTicketsByUser,
  updateTicket,
  getTicketsByTechnician,
  getTicket,
} from "../controllers/tickets.js";

const router = express.Router();

router.get("/", getTickets);
router.get("/:id", getTicket);
router.get("/user/:id", getTicketsByUser);
router.get("/tech/:id", getTicketsByTechnician);
router.post("/", createTicket);
router.patch("/:id", updateTicket);

export default router;
