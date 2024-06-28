import express, { Request, Response } from 'express'
import { MovieRouter } from './modules/movies/movie.route'
export const app = express()
import cors from "cors"
// require('dotenv').config();
// const port = 5000
app.use(express.json())
app.use(cors())



// handeling routes 
app.use('/api/movies', MovieRouter)

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')

})
