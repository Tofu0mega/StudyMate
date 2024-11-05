import express from 'express'

import connectDB from './Configs/Database.js'

import router from "./Routes.js"
import cors from "cors"
import ConnectCloud from './Configs/Cloudinary.js'

const app = express()

connectDB();

ConnectCloud();




app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ limit: '100mb', extended: true }));



app.use(express.json());
const allowedOrigins = ['http://127.0.0.1:5173'];

app.use(cors({
    origin: '*', // Allows all origins; change this for production.
    credentials: true,
}));


app.use("",router)


app.listen(3000,()=>{
    console.log("Listening at Port 3000")
})