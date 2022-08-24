import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import express, { Application } from 'express';

const app: Application = express();

app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));

export default app;
