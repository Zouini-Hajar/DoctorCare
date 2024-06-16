import { Router } from "express";
import {
  getAllDoctors,
  getDoctorById,
  updateDoctorById,
  deleteDoctorById,
  getDoctorProfile,
} from "../controllers/DoctorController.js";
import { authenticate, restrict } from "../middlewares/verifyToken.js";
import ReviewRouter from "../routes/review.js";

const routes = Router();

// Nested route
routes.use("/:doctorId/reviews", ReviewRouter);

routes.get("/", getAllDoctors);
routes.get("/:id", getDoctorById);
routes.put("/:id", authenticate, restrict(["doctor"]), updateDoctorById);
routes.delete("/:id", authenticate, restrict(["doctor"]), deleteDoctorById);
routes.get(
  "/profile/me",
  authenticate,
  restrict(["doctor"]),
  getDoctorProfile
);
export default routes;
