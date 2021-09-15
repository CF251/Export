import { Application } from 'express';
import {listBrands, listCompanies} from "../controllers/exportController";

/**
 * Initializes routes
 * @param {Application} app
 */
export const initializeRouter = (app: Application) => {
  app.get('/companies', listCompanies);
  app.get('/brands', listBrands)
};
