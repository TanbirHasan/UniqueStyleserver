const express = require("express");
const cors = require("cors");

const mongoose = require("mongoose");
const dotenv = require("dotenv");

const productRoute = require("./routes/products");

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();








//connect with data base

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("db connection successfull"))
  .catch((err) => console.log(err));


app.use("/api/products", productRoute);


app.listen(process.env.PORT || 8000, () => {
  console.log("server is runnning");
});
