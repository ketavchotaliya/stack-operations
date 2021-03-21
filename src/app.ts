import express, { Request, Response } from 'express';
import middleware from './middleware';
import routes from './routes';
import STATUS_CODES from 'http-status-codes';

const app: express.Application = express();

// Use Middleware
middleware(app);
// Use routes
routes(app);

/**
 * Health Check
 * @route GET /health
 * @group Base - API of base routes
 * @returns {string} 200 - healthy
 */
app.get('/health', (req: Request, res: Response) => {
  return res.status(200).send('healthy');
});

// Invalid Route
app.all('/*', (req: Request, res: Response) => {
  return res
    .status(STATUS_CODES.NOT_FOUND)
    .json({ status: STATUS_CODES.NOT_FOUND, message: STATUS_CODES.getStatusText(STATUS_CODES.NOT_FOUND) });
});

export default app;
