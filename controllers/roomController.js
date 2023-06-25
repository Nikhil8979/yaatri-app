import RoomModel from "../models/room";
import ErrorHandler from "../utils/errorHandler";
const allRooms = async (req, res) => {
  try {
    const rooms = await RoomModel.find({});
    res.status(200).json({ success: true, rooms, count: rooms.length });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const createRoom = async (req, res) => {
  try {
    const room = await RoomModel.create(req.body);
    return res.status(200).json({
      success: true,
      room,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getSingleRoom = async (req, res, next) => {
  const room = await RoomModel.findById(req.query.id);
  if (!room) {
    throw new ErrorHandler("Room not found with id.", 404);
  }

  return res.status(200).json({
    success: true,
    room,
  });
};
const updateRoom = async (req, res) => {
  let room = await RoomModel.findById(req.query.id);
  if (!room) {
    res.status(400).json({
      success: false,
      message: "Room not found with Id.",
    });
  }

  room = await RoomModel.findByIdAndUpdate(req.query.id, req.body, {
    runValidators: true,
    new: true,
  });

  return res.status(200).json({
    success: true,
    room,
  });
};

const deleteRoom = async (req, res) => {
  let room = await RoomModel.findById(req.query.id);
  if (!room) {
    res.status(400).json({
      success: false,
      message: "Room not found with Id.",
    });
  }

  await RoomModel.deleteOne({ _id: room._id });

  return res.status(200).json({
    success: true,
    room,
    message: "Room deleted successfully.",
  });
};
export { allRooms, createRoom, getSingleRoom, updateRoom, deleteRoom };
