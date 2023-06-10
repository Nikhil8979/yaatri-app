import Room from "../models/room";

const allRooms = (req, res) => {
  console.log("-sdf");
  res.status(200).json({ success: true, message: "All rooms" });
};

const createRoom = async (req, res) => {
  try {
    const room = await Room.create(req.body);
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
export { allRooms, createRoom };
