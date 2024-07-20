import express from "express";
import {
  getTickets,
  createTicket,
  getTicketsByUser,
  updateTicket,
  getTicketsByTechnician,
  getTicket,
} from "../controllers/tickets.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", auth, getTickets);
router.get("/:id", auth, getTicket);
router.get("/user/:id", auth, getTicketsByUser);
router.get("/tech/:id", auth, getTicketsByTechnician);
router.post("/", auth, createTicket);
router.patch("/:id", auth, updateTicket);

export default router;
