import { Request, Response, Router } from 'express';
import StackOperationsValidations from './stackOperations.validation';
import StackOperationsController from './stackOperations.controller';

const router = Router();

/**
 * Stack Operations
 * @route POST /stack-operations/api/v1/operation
 * @param {StackOperations.model} body.body - Body
 * @returns {object} 200 - Ok
 * @returns {object} 422 - Un processable Entity
 * @returns {object} 500 - Internal server error
 */
/**
 * @typedef StackOperations
 * @property {string} input
 */
router.post('/api/v1/operation', StackOperationsValidations.validateInput, (req: Request, res: Response) => {
  StackOperationsController.performStackOperation(req, res);
});

export default router;
