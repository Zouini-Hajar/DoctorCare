import { Router } from "express";
import {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} from "../controllers/UserController.js";
import { authenticate, restrict } from "../middlewares/verifyToken.js";

const routes = Router();

routes.get("/", authenticate, restrict(["admin"]), getAllUsers);
routes.get("/:id", authenticate, restrict(["patient"]), getUserById);
routes.put("/:id", authenticate, restrict(["patient"]), updateUserById);
routes.delete("/:id", authenticate, restrict(["patient"]), deleteUserById);

export default routes;
