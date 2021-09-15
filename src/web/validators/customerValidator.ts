import { body } from 'express-validator';

export const addCustomer = [body('uuid').not().isEmpty().withMessage('uuid of the Neo4j Customer Node')];
