import STATUS_CODES from 'http-status-codes';
import { CustomRequest, CustomResponse } from '../../environment';
import { createResponse } from '../../utils/helper';
import { logger } from '../../utils/logger';
import { Stack } from './stack';

class StackOperations {
  /**
   * @description Perform stack operations
   * @param req
   * @param res
   */
  async performStackOperation(req: CustomRequest, res: CustomResponse) {
    try {
      const { input } = req.body;
      // const inputArray = input.splice(' ');

      createResponse(res, STATUS_CODES.OK, res.__('output'), {});
    } catch (error) {
      logger.error(__filename, 'performStackOperation', 'countryList', error);
      createResponse(res, STATUS_CODES.INTERNAL_SERVER_ERROR, res.__('SERVER_ERROR'));
    }
  }
}

export default new StackOperations();
