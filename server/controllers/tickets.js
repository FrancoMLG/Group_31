import Ticket from "../models/ticket.js";

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
      createdAt: new Date().toISOString(),
    });
    console.log(result);
    res.status(201).json(result);
  } catch (error) {
    res.status(409).json({message: error.message});
  }
};
