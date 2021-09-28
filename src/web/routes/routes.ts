import { Application } from 'express';
import { listBrands, listBrandsByUniqueGenericNames, listCompanies } from '../controllers/exportController';
import { paginationValidator } from '../validators/brandValidator';

/**
 * Initializes routes
 * @param {Application} app
 */
export const initializeRouter = (app: Application) => {
  // List Data from MongoDB Get Routes
  app.get('/companies', listCompanies);
  app.get('/brands', paginationValidator, listBrands);
  app.get('/generics', listBrandsByUniqueGenericNames);
};
