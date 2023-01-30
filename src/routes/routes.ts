import { Router } from "express"
import {deleteFilmeById, getAllMovies, getFilmeById, getHealth, postFilme, updateFilmDescription} from "../controllers/movies.controllers.js";
import { deleteFilmeValidation, filmesPostValidations, updateFilmeValidation } from "../middlewares/filmesValidations.js";


const routes = Router();

routes.get("/health", getHealth);
routes.get("/filmes",getAllMovies)
routes.post("/filme",filmesPostValidations,postFilme);
routes.get("/filme/:id", getFilmeById);
routes.put("/filme",updateFilmeValidation,updateFilmDescription);
routes.delete("/filme/:id",deleteFilmeValidation,deleteFilmeById)

export default routes;
