import { Router } from "express";
import validateAccessToken from "../middlewares/validateAccessToken";
import { getAllMedicines } from "../controllers/MedicineController";

const routes = Router();

routes.get('/', validateAccessToken, getAllMedicines);

export default routes;