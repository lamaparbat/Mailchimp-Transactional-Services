"use strict";

import express, { Express } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import hpp from 'hpp';
import dotenv from 'dotenv';
import { router } from "./src/router/index";
const {initTimescaleDBConnection} = require('./src/utils/timescaledbConnection');

dotenv.config();

// server config
const app: Express = express();
const port = 8800;

// security layer middlewares
app.use(cors());                    
app.use(helmet());    //  secure your Express apps by setting various HTTP headers.
app.use(hpp());      // protect against HTTP Parameter Pollution attacks

// init db connection
initTimescaleDBConnection();

// routes
app.use('/', router);

// on given port envoke
app.listen(port, (): void => {
 console.log(`Listening on PORT: ${port}`);
});



