import STATUS_CODES from 'http-status-codes';
import { CustomRequest, CustomResponse } from '../../environment';
import { createResponse } from '../../utils/helper';
import { logger } from '../../utils/logger';
import { Stack } from './stack';
import { OperatorFinder } from './operators';

class StackOperations {
  /**
   * @description Perform stack operations
   * @param req
   * @param res
   */
  public performStackOperation(req: CustomRequest, res: CustomResponse) {
    try {
      const { input } = req.body;
      const inputArray: string[] = input.split(' ').filter((element: string) => element);

      // Clear the previous data from stack
      Stack.clearStack();

      for (let i = 0; i < inputArray.length; i++) {
        if (!isNaN(Number(inputArray[i]))) {
          Stack.push(Number(inputArray[i]));
        } else {
          const operator = OperatorFinder.getOperator(inputArray[i]);
          const validateInput = operator?.validateInput();

          if (!validateInput) {
            createResponse(res, STATUS_CODES.OK, res.__('output'), { output: -1 });
            return;
          }

          operator?.stackOperation();
        }
      }

      createResponse(res, STATUS_CODES.OK, res.__('output'), { output: Stack.getLastElement() });
    } catch (error) {
      logger.error(__filename, 'performStackOperation', 'countryList', error);
      createResponse(res, STATUS_CODES.INTERNAL_SERVER_ERROR, res.__('SERVER_ERROR'));
    }
  }
}

export default new StackOperations();
