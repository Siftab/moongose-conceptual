import express, { Request, Response } from 'express'
export const app = express()
require('dotenv').config();
const port = 5000

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
})
