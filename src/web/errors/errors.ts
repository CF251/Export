import ErrorMessage from '../../enums/errors';

// Duplicate Key Error
export const DuplicateKeyError = () => {
  return { message: ErrorMessage.DUPLICATE_KEY_ERROR };
};

/**
 * ValidatorError generator
 * @param {Array.<Error>} errors
 */
export const ValidationError = (errors: any) => {
  return {
    message: ErrorMessage.VALIDATION_FAILED,
    stack: errors.map((e: any) => {
      return { param: e.param, ref: e.msg, location: e.location };
    }),
  };
};

/**
 * ServerError generator
 * @param {Error} e
 */
export const ServerError = (e: any) => {
  return { message: e };
};

/**
 * NotFoundError generator
 * @param {Error} e
 */
export const NotFoundError = (e: any) => {
  return { message: e };
};
