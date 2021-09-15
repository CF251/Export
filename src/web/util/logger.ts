import { generateRandomString } from './generator';
import * as dotenv from 'dotenv';

dotenv.config();

const config = require('config');
const winston = require('winston');
const httpContext = require('express-http-context');

const { createLogger, format, transports } = winston;

const silent = process.env.LOGGER_SLIENT || config.get('logger.silent');

const reqId = httpContext.get('reqId');

// Initialize Application Logger
export const logger = createLogger({
  level: 'debug',
  silent: silent,
  format: format.combine(
    format.colorize({ all: false }),
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    format.printf(
      (info: any) => `${info.timestamp} ${reqId ? reqId : generateRandomString()} ${info.level}: ${info.message}`,
    ),
  ),
  transports: [new transports.Console({ colorize: true })],
});
