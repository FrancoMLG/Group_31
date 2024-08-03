import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  permissionLevel: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true},
  hoursWorked: {type: Number, default: 0},
});

export default mongoose.model("User", userSchema);
