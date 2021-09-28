import { query } from 'express-validator';

export const paginationValidator = [
  query('skip').isNumeric().not().isEmpty().withMessage('skip'),
  query('limit').isNumeric().not().isEmpty().withMessage('limit'),
];
