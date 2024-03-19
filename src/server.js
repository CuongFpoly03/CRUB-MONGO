const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const routes = require("./routes/index");
const morgan = require("morgan");
const app = express();
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//connect route
routes(app);

app.use(morgan());
//connect mongoose
connectDB();

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log("run success !", port);
});
