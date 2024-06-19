const express = require("express");
const Event = require("../models/eventSchema");

const router = express.Router();
router.use(express.json());

//Post
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

//Get all
router.get("/", async (req, res) => {
  try {
    const event = await Event.find();
    res.status(200).send(event);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

//Get by ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const event = await Event.findById(id);
    if (!event) {
      return res.status(400).send("Event Not Found");
    }
    res.status(200).send(event);
  } catch (err) {
    res.status(200).send(err.message);
  }
});

//Update Events
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, description, date, time, location, organizer, price, image } =
    req.body;

  try {
    const updatedEvent = await Event.findByIdAndUpdate(
      id,
      {
        name,
        description,
        date,
        time,
        location,
        organizer,
        price,
        image,
      },
      { new: true, runValidators: true }
    );
    if (!updatedEvent) {
      res.status(400), send("Event not found");
    }
    res.status(200).send(updatedEvent);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

//Delete Events
router.delete("/", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedEvent = await Event.findByIdAndDelete(id);
    if (!deletedEvent) {
      return res.status(400).send("Event not found");
    }
    res.status(200).send(deletedEvent);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;
