import { Router } from "express";
import { getAllDoctors } from "../controllers/DoctorController";

const routes = Router();

routes.get('/', getAllDoctors);

export default routes;