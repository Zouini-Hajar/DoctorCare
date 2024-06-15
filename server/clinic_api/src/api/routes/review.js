import { Router } from "express";
import { createReview, getAllReviews } from "../controllers/ReviewController";
import { authenticate, restrict } from "../middlewares/verifyToken";

const routes = Router({ mergeParams: true });

routes.get("/", getAllReviews);
routes.post("/", authenticate, restrict(["patient"]), createReview);

export default routes;
