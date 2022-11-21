import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

// make .env file accessible 
dotenv.config();

// server config
const app: Express = express();
const port = process.env.PORT || 8000;

// on default route call
app.get('/', async (req: Request, res: Response) => {
 res.send('Server has been started..');
});

// on given port envoke
app.listen(port, (): void => {
 console.log(`Listening on PORT: ${port}`);
});



