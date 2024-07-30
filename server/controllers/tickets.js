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

export const getTicket = async (req, res) => {
  const {id} = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send("No ticket with that id");

    const ticket = await Ticket.findById(id)
      .populate("creator")
      .populate("technician")
      .populate("messages.sender");

    res.status(200).json(ticket);
  } catch (error) {
    res.status(404).json({message: error.message});
  }
};

export const getTicketsByUser = async (req, res) => {
  try {
    const tickets = await Ticket.find({creator: req.params.id}).populate(
      "technician"
    );
    res.status(200).json(tickets);
  } catch (error) {
    res.status(404).json({message: error.message});
  }
};

export const getTicketsByTechnician = async (req, res) => {
  try {
    const tickets = await Ticket.find({technician: req.params.id}).populate(
      "creator"
    );
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
      technician: null,
      createdAt: new Date().toISOString(),
      timeEstimate: null,
      messages: [],
    });
    console.log(result);
    res.status(201).json(result);
  } catch (error) {
    res.status(409).json({message: error.message});
  }
};

export const updateTicket = async (req, res) => {
  const {id: _id} = req.params;
  const ticket = req.body;

  try {
    if (!mongoose.Types.ObjectId.isValid(_id))
      return res.status(404).send("No ticket with that id");

    const updatedTicket = await Ticket.findByIdAndUpdate(
      _id,
      {...ticket, _id},
      {new: true}
    );

    res.status(200).json(updatedTicket);
  } catch (error) {
    res.status(409).json({message: error.message});
  }
};
