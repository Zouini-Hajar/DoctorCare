import { Router } from "express";
import validateAccessToken from "../middlewares/validateAccessToken";
import { getAllAppointments } from "../controllers/AppointmentController";

const routes = Router();

routes.get('/', validateAccessToken, getAllAppointments);

export default routes;