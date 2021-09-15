const { body } = require('express-validator');

export const customerAuthentication = [
  body('token').not().isEmpty().withMessage('token has to be a valid JWT token'),
  body('uuid').not().isEmpty().withMessage('uuid of the Neo4j Customer Node'),
];
