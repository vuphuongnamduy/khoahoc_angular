const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const logger = require("morgan");
const cors = require("cors");

dotenv.config({
  path: path.join(__dirname, `env/${process.env.NODE_ENV}.env`),
});

const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const indexRouter = require("./routes/index");
app.use("/", indexRouter);

app.get("/", (req, res) => {
  res.status(200).send("Health Check");
});

const PORT = process.env.PORT || 5000;
const ENV = process.env.NODE_ENV || null;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} using ${ENV} env.`);
});
