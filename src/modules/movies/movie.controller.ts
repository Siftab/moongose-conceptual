import { Request, Response } from "express";
import { movieServies } from "./movie.services";


const createMovie = async (req: Request, res: Response) => {
    const movieData = req.body;
    const result = await movieServies.createMovie(movieData)
    res.json({
        success: true,
        message: "data implemented ssuccessfully",
        data: result
    })
}
// getting all movie 
const getAllMovie = async (req: Request, res: Response) => {
    try {
        const result = await movieServies.getAllMovies();
        res.json({
            success: true,
            message: "all movie data retrive",
            data: result
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "failed to fetch all movie ",
            data: error
        })

    }
}

// getting movie with id 

const findSingleMovie = async (req: Request, res: Response) => {
    try {
        const { movieId } = req.params

        const result = await movieServies.findSingleMovie(movieId)
        res.json({
            success: true,
            message: "find by id successfully ",
            data: result
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "failed to fetch by id  ",
            data: error
        })

    }
}



export const movieControllers = {
    createMovie,
    getAllMovie,
    findSingleMovie
}