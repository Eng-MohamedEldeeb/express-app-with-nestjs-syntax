import { createMethodDecorator } from '../factories/create-method-decorator.factory';

export const Patch = (endPoint: string) => {
  return createMethodDecorator('patch', endPoint);
};
