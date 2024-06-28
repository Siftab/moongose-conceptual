import express, { Request, Response } from "express"

const router = express.Router();

router.post('/', (req: Request, res: Response) => {
    // res.send("hi from movie router    ")
    console.log(req.body)
})

export const MovieRouter = router;