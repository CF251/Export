import express from 'express';
import * as dotenv from 'dotenv';
import { initializeNeo4j } from './entities/infra/neo4j/neo4j';

dotenv.config();

const cors = require('cors');
const config = require('config');
const httpContext = require('express-http-context');

const { initializeRouter } = require('./web/routes/routes');
const { initializeMongoDB } = require('./entities/infra/mongo/client');
const { generateRandomString } = require('./web/util/generator');

const port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || config.get('web.port');

const app = express();

app.set('port', port);
app.use(express.json());
app.use(httpContext.middleware);
app.use(cors({ 'Access-Control-Allow-Headers': 'Content-Type, Authorization' }));

// @ts-ignore
app.use((req: Request, res: Response, next: () => void) => {
  httpContext.set('reqId', generateRandomString());
  next();
});

initializeMongoDB().then();
const driver = initializeNeo4j();
app.set('neo4j', driver);

initializeRouter(app);

export default app;
