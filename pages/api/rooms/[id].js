import { createRouter, expressWrapper } from "next-connect";
import dbConnect from "../../../config/dbConfig";
import {
  deleteRoom,
  getSingleRoom,
  updateRoom,
} from "../../../controllers/roomController";
import error from "../../../middlewares/errors";
const router = createRouter();
dbConnect();
router.use(expressWrapper(error));
router.get(getSingleRoom);
router.put(updateRoom);

router.delete(deleteRoom);
export default router.handler({
  onError: (err, req, res) => {
    console.error(err.stack);
    res.status(err.statusCode || 500).end(err.message);
  },
});
