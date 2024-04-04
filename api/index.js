import express from 'express'
import cookieParser from 'cookie-parser'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config();

// Cors set-up
var corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
console.log(process.env.MongoURI);
await mongoose.connect(process.env.MongoURI)
    .then((val) => {
        console.log("Connected to MongoDb");
    })
    .catch((e) => console.log("Could not connect to database",e))

const app = express();
app.use(express.json()) 
app.use(cors(corsOptions))
app.use(cookieParser())

// Handle Routes
//app.use("/api/v1/article", articleroutes)

// Error handling  middleware should be after all routes
app.use((err, req, res, next) => {
    const errorMessage = err.message || 'Internal Server Error'
    const errorCode = err.statusCode || 500
    res
        .status(errorCode)
        .json({
            success: false,
            message: errorMessage
        })
})

app.listen(3000, () => {
    console.log("Server is listening at port 3000");
})