const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb://localhost/auth",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  () => {
    console.log("The database is up and running");
  }
);

const authRoute = require("./routes/auth");
const restaurantRoute = require("./routes/restaurantRoute");
app.use("/api/user", authRoute);
app.use("/api/restaurant", restaurantRoute);

app.listen(5000, () => {
  console.log("The server is running on port 5000");
});
