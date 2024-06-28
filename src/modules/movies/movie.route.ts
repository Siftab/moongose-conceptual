import express from "express"
// import { Movie } from "./movie.model";
import { movieControllers } from "./movie.controller";

const router = express.Router();

router.post('/', movieControllers.createMovie)

export const MovieRouter = router;