import { Router } from "express";
import validateAccessToken from "../middlewares/validateAccessToken";
import { getAllPatients } from "../controllers/PatientController";

const routes = Router();

routes.get('/', validateAccessToken, getAllPatients);

export default routes;