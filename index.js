import express from "express";
import appRouter from "./routes/index.js";
import cors from "cors"; 
import { connectToDatabase } from "./database/database.js";

//config();

const app = express();


//middlewares
app.use(express.json());

app.use("/api/contacts", appRouter);

const allowedOrigins = process.env.NODE_ENV === 'production'
    ? [process.env.FRONTEND_URL] 
    : [process.env.DEVLOPMENT_URL];

app.use(cors({
    origin: allowedOrigins,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}));




connectToDatabase()
.then(() => {
    const PORT = process.env.A_PORT;
    app.listen (PORT,()=>console.log("server listening on port ", PORT));
}).catch(error=>{
    console.log("error database connection");
    console.log(error);
    process.exit(0);
});


