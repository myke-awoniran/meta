import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import express, { Application } from 'express';
import { AppRouter } from './AppRouter';
import './controllers/rootController';
import './controllers/loginController';

const app: Application = express();

app.use(cors());

app.use(morgan('combined'));

app.use(bodyParser.json());

app.use(AppRouter.getInstance());

export default app;
