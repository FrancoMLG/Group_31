import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.js";

export const signup = async (req, res) => {
  console.log(req.body);
  const {firstName, lastName, email, password} = req.body;

  try {
    const existingUser = await User.findOne({email});
    if (existingUser)
      return res.status(400).json({message: "User already exists"});

    const hashedPassword = await bcrypt.hash(password, 12);
    const result = await User.create({
      email,
      password: hashedPassword,
      firstName,
      lastName,
    });

    res.status(200).json({result});
  } catch (error) {
    res.status(500).json({message: "Something went wrong"});
  }
};

// TODO: Implement authentication
