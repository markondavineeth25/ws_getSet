import express from 'express';
import bodyParser from 'body-parser';
import http from 'http';
import cors from 'cors';
import { router } from './routes/index.route.js';

// define ports and service name
const port = 9000;
const serviceName = 'GETSETUP backend server';

// setup app & its routes
const app = express();
app.use(cors(), express.json());
app.use(router);

// Here I am configuring express to use body-parser as middle-ware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//start http server
const httpServer = http.createServer(app);
httpServer.listen(port);
console.log(`[${serviceName}] http server listening at port ${port}`);
