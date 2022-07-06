const express = require("express");
const cors = require("cors");

const mongoose = require("mongoose");
const dotenv = require("dotenv");
var jwt = require("jsonwebtoken");

const productRoute = require("./routes/products");
const ordersRoute = require("./routes/orders");

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();



function verifyJWT(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).send({ message: "Unauthorized access" });
  }
  const token = authHeader.split(" ")[1];

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).send({ message: "Forbidden Access" });
    }

    req.decoded = decoded;

    next();
  });
}






//connect with data base

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("db connection successfull"))
  .catch((err) => console.log(err));


app.use("/api/products", productRoute);
app.use("/api/orders", ordersRoute);


app.listen(process.env.PORT || 8000, () => {
  console.log("server is runnning");
});
