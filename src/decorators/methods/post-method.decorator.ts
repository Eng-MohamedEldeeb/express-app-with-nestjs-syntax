import { createMethodDecorator } from '../factories/create-method-decorator.factory';

export const Post = (endPoint: string) => {
  return createMethodDecorator('post', endPoint);
};
