import mongoose from "mongoose";
import { app } from "./app";

const port = 5000

async function main() {
    try {
        await mongoose.connect(`${process.env.DB_URL}`);

        // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
        // appolo-flix
        // 2J6NF13Ul94pex7f

        app.listen(process.env.PORT, () => {
            console.log(`server is  listening on port ${process.env.PORT}`)
        })

    } catch (error) {
        console.log(`error in server connection ${error}`)

    }
}

main()