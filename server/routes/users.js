import express from "express";
import {signin, signup, getUsers, updateUser} from "../controllers/users.js";

const router = express.Router();

router.post("/signin", signin);
router.post("/signup", signup);

router.get("/", getUsers);
router.patch("/:id", updateUser);
router.patch("/:id/loghours", updateUser);

export default router;
