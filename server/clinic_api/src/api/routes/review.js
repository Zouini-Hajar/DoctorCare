import { Router } from "express";
import { createReview, getAllReviews } from "../controllers/ReviewController.js";
import { authenticate, restrict } from "../middlewares/verifyToken.js";

const routes = Router({ mergeParams: true });

routes.get("/", getAllReviews);
routes.post("/", authenticate, restrict(["patient"]), createReview);

export default routes;
