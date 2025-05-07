import express, { Express } from 'express';
import { bootStrap } from './app.controller';

const app: Express = express();
const PORT = process.env.PORT ?? 3001;

bootStrap(app);

app.listen(PORT, () => console.log('Server is running on port => ', PORT));
