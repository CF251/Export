import { Request, Response } from 'express';
import { logger } from '../util/logger';
import StatusCode from '../../enums/codes';
import {listBrandService, listCompanyService} from "../services/exportService";

/**
 * List Companies
 * @param {Request} req
 * @param {Response} res
 */
export const listCompanies = async (req: Request, res: Response) => {
  logger.debug('ExportController::listCompanies::validating request body');
  try {
    logger.debug('ExportController::listCompanies::verifying user authentication');
    const response = await listCompanyService()
    logger.debug('ExportController::listCompanies::verified user authentication');

    res.status(StatusCode.OK).send(response);
  } catch (e) {
    logger.debug('ExportController::listCompanies::Failed to verify customer authentication' + e.message);
    res.status(StatusCode.BAD_REQUEST).send({ error: e });
  }
};

/**
 * List Brands
 * @param {Request} req
 * @param {Response} res
 */
export const listBrands = async (req: Request, res: Response) => {
  logger.debug('ExportController::listBrands::validating request body');
  try {
    logger.debug('ExportController::listBrands::verifying user authentication');
    const response = await listBrandService()
    logger.debug('ExportController::listBrands::verified user authentication');

    res.status(StatusCode.OK).send(response);
  } catch (e) {
    logger.debug('ExportController::listBrands::Failed to verify customer authentication' + e.message);
    res.status(StatusCode.BAD_REQUEST).send({ error: e });
  }
};
