import { Router } from "express"
import {deleteFilmeById, getFilmeById, getHealth, postFilme, updateFilmDescription} from "../controllers/movies.controllers.js";
import { deleteFilmeValidation, filmesPostValidations, updateFilmeValidation } from "../middlewares/filmesValidations.js";

const routes = Router();

routes.get("/health", getHealth);
routes.post("/filme",filmesPostValidations,postFilme);
routes.get("/filme/:id", getFilmeById);
routes.put("/update",updateFilmeValidation,updateFilmDescription);
routes.delete("/delete/:id",deleteFilmeValidation,deleteFilmeById)

export default routes;
