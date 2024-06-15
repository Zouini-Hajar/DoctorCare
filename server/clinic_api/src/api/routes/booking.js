import { Router } from "express";
import { getAllBookings } from "../controllers/BookingController.js";

const routes = Router();

routes.get('/', getAllBookings);

export default routes;