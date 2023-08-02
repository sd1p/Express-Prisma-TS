import express from "express";
import type{Request,Response} from 'express'
import cors from "cors";
import dotenv from 'dotenv';
import {errorHandler,routeNotFound} from "./middlewares/errorMiddleware"
import todoRoutes from "./routes/todoRoute"

dotenv.config();

const app=express();
const server = require('http').Server(app)
app.use(express.json());
app.use(cors());

app.use("/api",todoRoutes)

app.get("/",(req: Request,res:Response)=>{
    res.status(200).json({message:"hey there"})
})

app.use(routeNotFound);
app.use(errorHandler);
const port:number=parseInt(process.env.PORT as string,10)||5000


// app.listen(port,()=>{
//     console.log(`Server is running on ${port}`);
    
// })

/* Export server object */
module.exports = server

/* Initialize server */
server.listen(port, () => console.log('Server is listening.') )
server.on('error', (error:any) => console.error(error) )