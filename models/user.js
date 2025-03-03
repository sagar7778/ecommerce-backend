import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: {
    type: Object,
    required: true,
  },
  phoneNo: {
    type: String,
    required: true,
  },
  avtar: {
    type: String,
    default: "",
  },
});
const User = mongoose.model("User", userSchema);

export default User;
