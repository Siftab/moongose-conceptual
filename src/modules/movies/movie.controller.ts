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

export const movieControllers = {
    createMovie
}