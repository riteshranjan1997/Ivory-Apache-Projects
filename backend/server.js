const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

mongoose.connect(
  process.env.ATLAS_URI,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  (err) => {
    console.log(err);
    console.log("The database is up and running");
  }
);

const authRoute = require("./routes/auth");
const restaurantRoute = require("./routes/restaurantRoute");
const accountSettings = require("./routes/accountSettings");
const cart = require("./routes/cart");
const payment = require("./routes/payment");
app.use("/api/user", authRoute);
app.use("/api/restaurant", restaurantRoute);
app.use("/api/settings", accountSettings);
app.use("/api/cart", cart);
app.use("/api/payment", payment);

app.listen(5001, (err) => {
  console.log(err);
  console.log("The server is running on port 5001");
});
