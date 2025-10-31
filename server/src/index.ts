import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import renderRoutes from "./routes/render"
import editRoutes from "./routes/edit"
import uploadRoutes from "./routes/upload"

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/upload",uploadRoutes);
app.use("/api/edit",editRoutes);
app.use("/api/render",renderRoutes);

mongoose.connect(process.env.MONGO_URI!).then(()=>console.log("MongoDB connected")).catch(err=>console.error(err));

app.listen(process.env.PORT || 5000,()=>
console.log("Server running on port 5000"))