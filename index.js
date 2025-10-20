
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';
import connectDB from './config/db.js';

dotenv.config();
connectDB();


const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);

app.use("/", (req, res) => {
    res.send("API is running...");
});



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Auth Server is running on port: ${PORT}`);
})