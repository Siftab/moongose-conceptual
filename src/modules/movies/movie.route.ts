import express from "express"
// import { Movie } from "./movie.model";
import { movieControllers } from "./movie.controller";

const router = express.Router();

router.post('/', movieControllers.createMovie)
router.get('/', movieControllers.getAllMovie)
// router.get('/:movieId', movieControllers.findSingleMovie)
router.get('/:slug', movieControllers.getMovieBySlug)

export const MovieRouter = router;