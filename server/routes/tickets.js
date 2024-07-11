import express from "express";
import {
  getTickets,
  createTicket,
  getTicketsByUser,
} from "../controllers/tickets.js";

const router = express.Router();

router.get("/", getTickets);
router.get("/:id", getTicketsByUser);
router.post("/", createTicket);

export default router;
