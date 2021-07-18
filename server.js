import express from 'express';
import { router as routes } from './routes';

const app = express();

app.use('/api', routes);

export { app } ;