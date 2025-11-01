import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import renderRoutes from "./routes/render.js";
import editRoutes from "./routes/edit.js";
import uploadRoutes from "./routes/upload.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: join(__dirname, '../.env.local') });

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api",uploadRoutes);
app.use("/api",editRoutes);
app.use("/api",renderRoutes);

mongoose.connect(process.env.MONGO_URI!).then(()=>console.log("MongoDB connected")).catch(err=>console.error(err));

app.listen(process.env.PORT || 5000,()=>
console.log("Server running on port 5000"))