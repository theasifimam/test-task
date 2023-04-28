const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./models/user.model");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://0.0.0.0:27017/users");

app.post("/add-user", async (req, res) => {
  console.log(req.body);
  try {
    await User.create({
      name: req.body?.name,
      age: req.body?.age,
      sex: req.body?.sex,
      mobileNo: req.body?.mobileNo,
      dob: req.body?.dob,
      idType: req.body?.idType,
      aadhaarNo: req.body?.aadhaarNo,
      panNo: req.body?.panNo,
      guardianLabel: req.body?.guardianLabel,
      guardianName: req.body?.guardianName,
      email: req.body?.email,
      emergencyNo: req.body?.emergencyNo,
      address: req.body?.address,
      state: req.body?.state,
      city: req.body?.city,
      country: req.body?.country,
      occupation: req.body?.occupation,
      religion: req.body?.religion,
      maritalStatus: req.body?.maritalStatus,
      bloodGroup: req.body?.bloodGroup,
      nationality: req.body?.nationality,
    });
    res.json({ status: "success", message: "User added sucessfully." });
  } catch (error) {
    console.log(error.message);
    res.json({ status: "error", message: "Duplicate email." });
  }
  // res.json({ status: "Ok" });
});

app.get("/all-users", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json({
      status: "success",
      users,
    });
  } catch (error) {
    console.log(error.message);
    res.json({
      status: "Fail",
      error,
    });
  }
});

app.listen(5000, () => console.log("server is running at 5000"));
