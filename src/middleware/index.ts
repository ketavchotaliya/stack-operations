import bodyParser from 'body-parser';
import { Application } from 'express';
import { i18n } from './i18n';

export default (app: Application) => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(i18n.init);
};
