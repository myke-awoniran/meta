import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import express, { Application } from 'express';
import { AppRouter } from './AppRouter';
import './controllers/rootController';
import './controllers/loginController';

const app: Application = express();

app.use(cors());

app.use(morgan('dev'));

app.use(bodyParser.json());

app.use(AppRouter.getInstance());

// app.use('*', (req, res, next) => {
//   res.status(200).json();
// });

export default app;
