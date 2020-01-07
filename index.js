const addresses = require("./routes/addresses");
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());
app.use(cors());
app.use("/addresses", addresses);

mongoose
  .connect("mongodb://localhost/second-project", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Connected to MongoDB..."))
  .catch(err => console.error("Could not connect to MongoDB...", err));

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}`));
