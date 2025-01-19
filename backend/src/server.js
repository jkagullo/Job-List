import express from 'express';
import dotenv from 'dotenv';
import connectDb from './config/connectDb.js';
import cors from 'cors';
import jobRoutes from './routes/jobRoutes.js';

dotenv.config(); // initialize dotenv file
const port = process.env.PORT || 4000;

connectDb(); // connect to MongoDB Atlas

const app = express(); // initialize express
app.use(express.json()); // use json
app.use(cors()); // use middleware cors

app.use("/api/jobs", jobRoutes); // use job routes


app.listen(port, () => { // stream on port
    console.log('Server is running on port', port);
})




