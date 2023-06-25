import ErrorHandler from "../utils/errorHandler";
export default function handler(err, req, res, next) {
  try {
    throw new ErrorHandler("sdf", 500);
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json({ message: error.message, success: false, error });
  }
}
