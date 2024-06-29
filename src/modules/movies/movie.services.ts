import { format } from "date-fns"
import { TMovie } from "./movie.interface"
import { Movie } from "./movie.model"



const createMovie = async (payLoad: TMovie) => {
    const date = format(payLoad.releaseDate, 'dd-MM-yyyy')
    const slug = `${payLoad.title.toLowerCase()}-${date}`
    console.log(slug, date, "slug")
    const result = await Movie.create({ ...payLoad, slug })
    return result
}
// finding alla movie 

const getAllMovies = async () => {
    const result = await Movie.find();
    return result


}


// finding by id 
const findSingleMovie = async (id: string) => {
    const result = await Movie.findById(id)
    return result;
}
// getting movie byu slutg 
const getMovieBySlug = async (slug: string) => {
    const result = await Movie.findOne({ slug: slug })
    return result
}

export const movieServies = {
    createMovie,
    getAllMovies,
    findSingleMovie,
    getMovieBySlug
}