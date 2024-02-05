import express from "express";
import env from "dotenv";
import cors from "cors";
import {LoginRouter} from "./router/login.js";
import { connectToDb } from "./db/connection.js";


env.config()

const app = express();

const port =process.env.PORT;
await connectToDb()

app.use(express.json())
app.use(cors());

app.use('/login',LoginRouter)

app.use((req,res) =>{
    res.send("Let's Crack the Code Sathish")
})

app.listen(port, () => console.log("Running on port " , port))

