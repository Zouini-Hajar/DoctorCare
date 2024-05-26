import { Router } from "express";
import { getAllArticles } from "../controllers/ArticleController";

const routes = Router();

routes.get('/', getAllArticles);

export default routes;