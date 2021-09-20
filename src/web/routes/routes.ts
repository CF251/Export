import { Application } from 'express';
import {
  listBrands,
  listBrandsByUniqueGenericNames,
  listCompanies
} from '../controllers/exportController';

/**
 * Initializes routes
 * @param {Application} app
 */
export const initializeRouter = (app: Application) => {
  // List Data from MongoDB Get Routes
  app.get('/companies', listCompanies);
  app.get('/brands', listBrands);
  app.get('/generics', listBrandsByUniqueGenericNames)
};
