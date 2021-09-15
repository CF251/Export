import { logger } from '../../../web/util/logger';
import * as dotenv from 'dotenv';

const mongoose = require('mongoose');

const config = require('config');
const debug = process.env.MONGO_DEBUG || config.get('mongo.debug');

dotenv.config();

const uri = process.env.MONGO_URI || config.get('mongo.uri');

// Initialize Mongo Client
export const initializeMongoDB = async () => {
  mongoose.set('debug', debug);
  await mongoose
    .connect(uri, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    .then(() => {
      logger.debug('Mongo connection established successfully');
    })
    .catch((err: Error) => {
      logger.debug(`Mongo Connection failed to established.\n${JSON.stringify(err)}`);
    });
};
