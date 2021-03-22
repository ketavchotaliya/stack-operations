import { NextFunction, Request, Response } from 'express';
import { INPUT_REGEX } from '../../utils/constants';
import { createValidationResponse } from '../../utils/helper';
import { isEmpty, matches } from '../../utils/validator';

class StackOperationsValidations {
  /**
   * @description Input validations
   * @param req
   * @param res
   * @param next
   */
  validateInput(req: Request, res: Response, next: NextFunction) {
    const { input } = req.body;
    const errors: any = {};

    if (isEmpty(input)) {
      errors.input = res.__('VALIDATIONS.input.required');
    } else if (!matches(input.toUpperCase(), INPUT_REGEX)) {
      errors.input = res.__('VALIDATIONS.input.invalid');
    }

    if (Object.keys(errors).length > 0) {
      createValidationResponse(res, errors);
    } else {
      next();
    }
  }
}

export default new StackOperationsValidations();
