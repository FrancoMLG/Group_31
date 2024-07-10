import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import ticketRoutes from "./routes/tickets.js";
import userRoutes from "./routes/users.js";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.use(express.json({limit: "30mb", extended: true}));
app.use(express.urlencoded({limit: "30mb", extended: true}));

app.use(cors());

app.use("/tickets", ticketRoutes);
app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.send("GET request to the homepage");
});

const PORT = 5000;

mongoose
  .connect(process.env.MONGODB_URI, {
    dbName: "group31",
  })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    })
  )
  .catch((error) => console.log(error.message));
