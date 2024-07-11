import mongoose from "mongoose";
import User from "./user.js";

const ticketSchema = mongoose.Schema({
  description: {type: String, required: true},
  creator: {type: mongoose.Schema.Types.ObjectId, ref: User, required: true},
  status: {type: String, required: true},
  category: {type: String, required: true},
  createdAt: {type: Date, default: new Date()},
});

export default mongoose.model("Ticket", ticketSchema);
