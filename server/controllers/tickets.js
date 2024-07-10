import Ticket from "../models/ticket.js";
import mongoose from "mongoose";

export const getTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find();
    res.status(200).json(tickets);
  } catch (error) {
    res.status(404).json({message: error.message});
  }
};

export const createTicket = async (req, res) => {
  const ticket = req.body;
  try {
    const result = await Ticket.create({
      ...ticket,
      creator: req.userId,
      createdAt: new Date().toISOString(),
    });
    res.status(201).json(result);
  } catch (error) {
    res.status(409).json({message: error.message});
  }
};
