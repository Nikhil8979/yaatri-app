const Room = require("../models/room");
const mongoose = require("mongoose");
const rooms = require("../rooms.json");

mongoose.connect("mongodb://localhost:27017/yaatri-app", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const seedRooms = async () => {
  try {
    await Room.deleteMany({});
    await Room.insertMany(rooms);
    process.exit();
    console.log("All rooms added successfully");
  } catch (error) {
    process.exit();
  }
};

seedRooms();
