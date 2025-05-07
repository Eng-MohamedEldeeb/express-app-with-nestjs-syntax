import { Application } from 'express';

export const useControllers = (
  app: Application,
  ...controllers: Function[]
) => {
  for (const controller of controllers) {
    app.use(controller.prototype.path, controller.prototype.router);
  }
};
