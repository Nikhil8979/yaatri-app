import { createRouter, expressWrapper } from "next-connect";
import dbConnect from "../../../config/dbConfig";
import { allRooms, createRoom } from "../../../controllers/roomController";
dbConnect();
const router = createRouter();

router.get(allRooms);
router.post(createRoom);

export default router.handler({
  onError: (err, req, res) => {
    console.error(err.stack);
    res.status(err.statusCode || 500).end(err.message);
  },
});
