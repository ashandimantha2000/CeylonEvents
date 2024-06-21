const express = require("express");
const Event = require("../models/eventSchema");
const multer = require("multer");
const path = require("path");

const router = express.Router();
router.use(express.json());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./uploads/images");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Use timestamp for unique filenames
  },
});

const upload = multer({ storage });

// Moved multer middleware to be inline with the route
router.post("/", upload.single("file"), async (req, res) => {
  const { name, description, date, time, location, organizer, price } =
    req.body;

  if (
    !name ||
    !description ||
    !date ||
    !time ||
    !location ||
    !organizer ||
    !price
  )
    return res.status(400).send("Missing required fields");

  try {
    const newEvent = new Event({
      name,
      description,
      date,
      time,
      location,
      organizer,
      price,
      image: req.file ? req.file.path : null, // Save the path of the uploaded file, if any
    });

    const savedEvent = await newEvent.save();
    res.status(201).json(savedEvent);
  } catch (error) {
    res.status(500).send(error.message);
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
  const { name, description, date, time, location, organizer, price } =
    req.body;

  try {
    const updatedEvent = await Event.findByIdAndUpdate(
      id,
      { name, description, date, time, location, organizer, price },
      { new: true, runValidators: true }
    );
    if (!updatedEvent) {
      return res.status(400).send("Event not found"); // Corrected: Changed comma to dot
    }
    res.status(200).send(updatedEvent);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// Delete Events route
router.delete("/:id", async (req, res) => {
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
