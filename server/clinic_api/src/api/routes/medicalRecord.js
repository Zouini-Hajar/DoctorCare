import { Router } from "express";
import validateAccessToken from "../middlewares/validateAccessToken";
import { getAllMedicalRecords } from "../controllers/MedicalRecordController";

const routes = Router();

routes.get('/', validateAccessToken, getAllMedicalRecords);

export default routes;