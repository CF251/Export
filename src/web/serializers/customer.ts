/**
 * Serializes customer object
 * @param {Object} data
 * @return {Object}
 */
export const serializeCustomer = (data: any) => {
  return {
    id: data._id.toString(),
    uuid: data.uuid,
    token: data.token,
    createdAt: data.createdAt,
    updatedAt: data.updatedAt,
    deletedAt: data.deletedAt,
  };
};
