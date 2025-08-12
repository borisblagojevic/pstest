import 'dotenv/config'
import express from 'express';

import moviesRoutes from "./routes/MoviesRoutes";

const PORT = process.env.NODE_PORT || 5000;

const app = express();

app.use(express.json());
app.use(moviesRoutes);

app.listen(PORT, () => console.info(`Server listening on port: ${PORT}`));

// testConnection(); //TODO: test only
