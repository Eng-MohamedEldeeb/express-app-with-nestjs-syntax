import { Application, json } from 'express';
import { useControllers } from './decorators/controller/use-controllers.decorator';
import { AuthController } from './modules/auth.controller';

export const bootStrap = (app: Application) => {
  app.use(json());

  useControllers(app, AuthController);
};
