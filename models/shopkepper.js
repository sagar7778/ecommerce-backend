import mongoose from "mongoose";

const shopkeeperSchema = new mongoose.Schema({
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
  companyName: {
    type: String,
    required: true,
  },
});

const Shopkeeper = mongoose.model("Shopkeeper", shopkeeperSchema);

export default Shopkeeper;
