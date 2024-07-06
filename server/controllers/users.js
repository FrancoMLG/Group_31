import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.js";

export const signin = async (req, res) => {
  const {email, password} = req.body;

  try {
    const existingUser = await User.findOne({email});
    if (!existingUser)
      return res.status(404).json({message: "User doesn't exist"});

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordCorrect)
      return res.status(400).json({message: "Invalid credentials"});

    res.status(200).json({result: existingUser});
  } catch (error) {
    res.status(500).json({message: "Something went wrong"});
  }
};

export const signup = async (req, res) => {
  console.log(req.body);
  const {firstName, lastName, email, password} = req.body;

  try {
    const existingUser = await User.findOne({email});
    if (existingUser)
      return res
        .status(400)
        .json({message: "User already exists. Use a different email."});

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
