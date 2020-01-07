const { Address } = require("./models/address");
const mongoose = require("mongoose");

async function clear() {
  await mongoose.connect("mongodb://localhost/second-project", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  await Address.deleteMany({});

  mongoose.disconnect();

  console.info("Cleared!");
}

clear();
