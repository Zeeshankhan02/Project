const express = require("express");
const mongoose = require("mongoose");
const UserModel = require("./Models/User");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors(
  {
    origin: [""],
    methods: ["POST", "GET"],
    credentials: true
  }
));
mongoose.connect(
  "mongodb+srv://ZeeshanKhan:Zxcvbnm@cluster0.jxlmfoz.mongodb.net/NewsHub?retryWrites=true&w=majority&appName=Cluster0"
);

app.post(`/`, (req, res) => {
  UserModel.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
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
  });
});

app.listen(3002, () => {
  console.log("server is running");
});
