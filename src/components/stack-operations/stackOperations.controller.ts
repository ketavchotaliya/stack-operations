import STATUS_CODES from 'http-status-codes';
import { CustomRequest, CustomResponse } from '../../environment';
import { createResponse } from '../../utils/helper';
import { logger } from '../../utils/logger';

class StackOperations {
  /**
   * @description Perform stack operations
   * @param req
   * @param res
   */
  async performStackOperation(req: CustomRequest, res: CustomResponse) {
    try {
      const response: Object = {};
      createResponse(res, STATUS_CODES.OK, res.__('LOCATION.COUNTRY_LIST'), response);
    } catch (error) {
      logger.error(__filename, 'countryList', req.custom.uuid, 'countryList', error);
      createResponse(res, STATUS_CODES.INTERNAL_SERVER_ERROR, res.__('SERVER_ERROR'));
    }
  }
}

export default new StackOperations();
