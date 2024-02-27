const express = require("express");
const mongoose = require("mongoose");
const UserModel = require("./Models/User");
const cors = require("cors");

const app = express();
app.use(express.json());

// CORS middleware to handle preflight requests
app.options('*', cors());

app.use(cors({
  origin: "*", // Allowing requests from any origin
  allowedHeaders: "*",
  allowedMethods: "*",
  credentials: true
}));

mongoose.connect(
  "mongodb+srv://ZeeshanKhan:Zxcvbnm@cluster0.jxlmfoz.mongodb.net/NewsHub?retryWrites=true&w=majority&appName=Cluster0",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.post(`/si`, (req, res) => {
  UserModel.create(req.body)
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json(err));
});

app.post(`/logIn`, (req, res) => {
  const { email, password } = req.body;
  UserModel.findOne({ email: email })
    .then((user) => {
      if (user) {
        if (user.password === password) {
          res.json("Success");
        } else {
          res.json("Incorrect Password");
        }
      } else {
        res.json("User Not Found");
      }
    })
    .catch((err) => res.status(400).json(err));
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
