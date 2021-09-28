import Company from '../../entities/models/companies';
import Brand from '../../entities/models/brands';

export const listCompanyService = async (skip, limit) => {
  return await Company.find().skip(skip).limit(limit);
};

export const listBrandService = async (skip: number, limit: number) => {
  return await Brand.find({}).skip(skip).limit(limit);
};

export const listDistinctGenericNames = async (skip, limit) => {
  return await Brand.aggregate([{ $group: { _id: '$generic_name', brands: { $push: '$name' } } }]).skip(skip).limit(limit);
};
