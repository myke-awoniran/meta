import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import express, { Application } from 'express';
import router from './routes/auth.routes';
import { AppRouter } from './AppRouter';
import './controllers/loginController';

const app: Application = express();

app.use(cors());

app.use(morgan('dev'));

app.use(bodyParser.json());

app.use(router);

app.use(AppRouter.getInstance());

export default app;
