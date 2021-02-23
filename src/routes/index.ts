import { Application } from 'express';

import StackOperationRoutes from '../components/stack-operations/stackOperations.route';

/**
 * Init All routes here
 */
export default (app: Application) => {
  // Provider Routes
  app.use('/stack-operations', StackOperationRoutes);
};
