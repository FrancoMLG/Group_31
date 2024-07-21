import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.js";
import mongoose from "mongoose";

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

    const token = jwt.sign(
      {email: existingUser.email, id: existingUser._id},
      "secret",
      {expiresIn: "1h"}
    );

    console.log(existingUser);
    res.status(200).json({result: existingUser, token});
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
      permissionLevel: "user",
    });

    const token = jwt.sign({email: result.email, id: result._id}, "secret", {
      expiresIn: "1h",
    });

    res.status(200).json({result, token});
  } catch (error) {
    res.status(500).json({message: "Something went wrong"});
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({message: error.message});
  }
};

export const updateUser = async (req, res) => {
  const {id: _id} = req.params;
  const user = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No user with that id");

  const updatedUser = await User.findByIdAndUpdate(
    _id,
    {...user, _id},
    {new: true}
  );
  res.json(updatedUser);
};
