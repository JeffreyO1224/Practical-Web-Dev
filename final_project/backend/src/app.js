import express from 'express';
import cors from 'cors';
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["*"],
  })
);

import reviewRoutes from './routes/reviewRoutes.js';
app.use('/reviews', reviewRoutes);

export default app;