import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import express, { Application } from 'express';
import { router as controllerRouter } from './decorators/controller';

import './controllers/loginController';
const app: Application = express();

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use(controllerRouter);

export default app;
