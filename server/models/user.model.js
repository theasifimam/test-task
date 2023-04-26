const mongoose = require("mongoose");

const User = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: { type: String, required: true },
    sex: { type: String, required: true },
    email: {
      type: String,
      required: true,
    },
    dob: {
      type: String,
    },
    mobileNo: {
      type: Number,
    },
    idType: {
      type: String,
    },
    aadhaarNo: {
      type: Number,
    },
    panNo: {
      type: String,
    },
    guardianLabel: {
      type: String,
    },
    guardianName: {
      type: String,
    },
    emergencyNo: {
      type: Number,
    },
    address: {
      type: String,
    },
    state: {
      type: String,
    },
    city: {
      type: String,
    },
    country: {
      type: String,
    },
    occupation: {
      type: String,
    },
    religion: {
      type: String,
    },
    maritalStatus: {
      type: String,
    },
    bloodGroup: {
      type: String,
    },
    nationality: {
      type: String,
    },
  },
  { collection: "users" }
);

const model = mongoose.model("users", User);
module.exports = model;
