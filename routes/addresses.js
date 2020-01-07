const { Address, validateAddress } = require("../models/address");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const addresses = await Address.find({});
  res.send(addresses);
});

router.get("/:id", async (req, res) => {
  const address = await Address.findById(req.params.id);
  if (!address) return res.status(404).send("Address not found.");

  res.send(address);
});

router.post("/", async (req, res) => {
  const { error } = validateAddress(req.body);
  if (!error) return res.status(400).send(error.details[0].message);

  const address = new Address({
    postcode: req.body.postcode,
    place_name: req.body.place_name,
    state_name: req.body.state_name,
    state_code: req.body.state_code,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    accuracy: req.body.accuracy
  });

  await address.save();

  res.send(address);
});

router.put("/:id", async (req, res) => {
  const { error } = validateAddress(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let address = await Address.findById(req.params.id);
  if (!address) return res.status(404).send("Address not found");

  address.postcode = req.body.postcode;
  address.place_name = req.body.place_name;
  address.state_name = req.body.state_name;
  address.state_code = req.body.state_code;
  address.latitude = req.body.latitude;
  address.longitude = req.body.longitude;
  address.accuracy = req.body.accuracy;

  await address.save();

  res.send(address);
});

router.delete("/:id", async (req, res) => {
  let address = await Address.findById(req.params.id);
  if (!address) return res.status(404).send("Address not found");

  await Address.findByIdAndDelete(req.params.id);

  res.send(address);
});

module.exports = router;
