import express from 'express';
import dotenv from 'dotenv';
import routes from './routes';
import { initDb } from './config/database';
import cors from 'cors';
import cookieParser from 'cookie-parser';

// Init dotenv
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middlewares etc
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(cookieParser());

// Init cors
app.use(cors({ origin: [process.env.ROOT_DOMAIN], credentials: true }));

// Import routes
app.use(routes);

// Start server
async function startServer() {
  initDb();
  app.listen(port, () => {
    return console.log(`server is listening on ${port}`);
  });
}

startServer();
