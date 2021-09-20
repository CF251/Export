import Company from '../../entities/models/companies';
import Brand from '../../entities/models/brands';

export const listCompanyService = async () => {
  return await Company.find();
};

export const listBrandService = async () => {
  return await Brand.find({});
};

export const listDistinctGenericNames = async () => {
  return await Brand.aggregate([{ $group: { _id: '$generic_name', brands: { $push: '$name' } } }]);
};
