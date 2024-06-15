import { configDotenv } from "dotenv";
import jwt, { decode } from "jsonwebtoken";
import Doctor from "../models/Doctor.js";
import User from "../models/User.js";

configDotenv();

export const authenticate = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader ? authHeader.split(" ")[1] : null;
  if (token == null)
    return res
      .status(401)
      .json({ success: false, message: "No token, authorization denied." });

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    req.userId = decoded.id;
    req.role = decoded.role;

    next();
  } catch (error) {
    if (error.response && error.response.status === 403) {
      res.sendStatus(403);
    } else {
      console.log(error);
      res.sendStatus(500);
    }
  }
};

export const restrict = (roles) => async (req, res, next) => {
  const userId = req.userId;

  const user = (await Doctor.findById(userId)) || (await User.findById(userId));

  if (!roles.includes(user.role)) {
    return res
      .status(401)
      .json({ success: false, messaage: "You are not authorized." });
  }

  next();
};
