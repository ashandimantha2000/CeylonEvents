const express = require("express");
const Event = require("../models/eventSchema");

const router = express.Router();
router.use(express.json());
router.post("/", async (req, res) => {
  const { name, description, date, time, location, organizer, price, image } =
    req.body;

  if (
    !name ||
    !description ||
    !date ||
    !time ||
    !location ||
    !organizer ||
    !price ||
    !image
  )
    return res.status(400).send("Missing required fields");

  try {
    const event = new Event({
      name,
      description,
      date,
      time,
      location,
      organizer,
      price,
      image,
    });
    const savedEvent = await event.save();
    res.status(201).send(savedEvent);
  } catch (err) {
    res.status(400).send(err.message);
  }
});


module.exports = router;