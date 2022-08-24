import { config } from 'dotenv';
config();
import app from './App';
import http from 'http';

const port: string | undefined = process.env.PORT;
const server = http.createServer(app);

async function startServer(): Promise<void> {
  // connectDB
  server.listen(port, () => {
    console.log(`server listening to traffic on port ${port}`);
  });
}

startServer();
