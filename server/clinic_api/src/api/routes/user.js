import express from "express";
import {
  updateUserById,
  deleteUserById,
  getAllUsers,
  getUserById,
  getUserProfile,
  getMyAppointments,
} from "../Controllers/UserController.js";
import { authenticate, restrict } from "../middlewares/verifyToken.js";

const router = express.Router();

router.get("/:id", authenticate, restrict(["patient", "admin"]), getUserById);
router.get("/", authenticate, restrict(["admin"]), getAllUsers);
router.put("/:id", authenticate, restrict(["patient", "admin"]), updateUserById);
router.delete("/:id", authenticate, restrict(["patient", "admin"]), deleteUserById);
router.get("/profile/me", authenticate, restrict(["patient", "admin"]), getUserProfile);
router.get("/appointments/my-appointments", authenticate, restrict(["patient"]), getMyAppointments);

export default router;
