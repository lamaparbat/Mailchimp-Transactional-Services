import express, { Express } from 'express';
import { router } from "./router/index";
import cors from 'cors';
import helmet from 'helmet';
import hpp from 'hpp';

// server config
const app: Express = express();
const port = 8800;


// security layer middlewares
app.use(cors());                    
app.use(helmet());    //  secure your Express apps by setting various HTTP headers.
app.use(hpp());      // protect against HTTP Parameter Pollution attacks

// routes
app.use('/', router);

// on given port envoke
app.listen(port, (): void => {
 console.log(`Listening on PORT: ${port}`);
});



