import * as dotenv from 'dotenv';
import {logger} from "../../../web/util/logger";

dotenv.config();

const neo4j = require('neo4j-driver');
const config = require('config');

/**
 * Initializing Neo4j Database
 * @return {Object}
 */
export const initializeNeo4j = () => {
  const uri = process.env.NEO4J_URI || config.get('neo4j.uri');
  const token = neo4j.auth.basic(
    process.env.NEO4J_USER || config.get('neo4j.user'),
    process.env.NEO4J_PASSWORD || config.get('neo4j.password'),
  );

  const cfg = {
    disableLosslessIntegers: true,
  };
  const driver = neo4j.driver(uri, token, cfg);
  if (driver) {
    logger.debug('Neo4j connection established successfully');
  }
  return driver;
};
