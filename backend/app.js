require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const holdings = require("./models/holdingmodel")
const positions = require("./models/positionsmodel")
const order = require("./models/ordermodel")
const watchlist = require("./models/watchlistmodel")
const cors = require("cors")
const bodyparser = require("body-parser")
const user = require("./models/usermodel");
const { createSecretToken } = require("./utils/secrettoken");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser")


const app = express()
const port = process.env.port

const mongo_url = process.env.mongo_url

app.use(express.urlencoded({ extended: true }))
// app.use(cookieParser());


app.use(cors({ origin: ["http://localhost:3000", "http://localhost:5173"] }))
app.use(bodyparser.json())

app.listen(port, (req, res) => {
  console.log("Listening on 5000 port")
  mongoose.connect(mongo_url)
  console.log("Db connected")
})


app.get("/holding", async (req, res) => {
  let allholdings = await holdings.find({})
  res.json(allholdings)
})
app.get("/position", async (req, res) => {
  let allpositions = await positions.find({})
  res.json(allpositions)
})

app.get("/getstock/:name", async (req, res) => {
  let { name } = req.params;
  let stock = await watchlist.findOne({ name: name })
  res.json(stock)
})

app.post("/neworder", async (req, res) => {
  let neworder = new order(req.body)
  await neworder.save()
})


app.post("/signup", async (req, res) => {
  try {
    console.log(req.body);
    const { email, password, username } = req.body;
    const existingUser = await user.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    const newuser = await user.create({ email, password, username });
    const token = createSecretToken(newuser._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res
      .status(201)
      .json({ message: "User signed in successfully", success: true, newuser });

  } catch (error) {
    console.error(error);
  }


})

app.post("/login", async (req, res) => {

  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({ message: 'All fields are required' })
    }
    const newuser = await user.findOne({ email });
    if (!newuser) {
      return res.json({ message: 'Incorrect password or email' })
    }
    const auth = await bcrypt.compare(password, newuser.password)
    if (!auth) {
      return res.json({ message: 'Incorrect password or email' })
    }
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res.status(201).json({ message: "User logged in successfully", success: true });
  } catch (error) {
    console.error(error);
  }
})
