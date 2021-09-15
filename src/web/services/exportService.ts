import Company from '../../entities/models/companies';
import Brand from '../../entities/models/brands';

const mongoose = require('mongoose');

export const listCompanyService = async () => {
  return await Company.find()
}

export const listBrandService = async () => {
  return await Brand.find({})
}
