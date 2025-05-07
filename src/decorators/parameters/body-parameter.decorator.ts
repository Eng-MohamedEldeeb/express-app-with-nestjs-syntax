import { createParam } from '../factories/create-parameter-decorator.factory';

export const Body = (data?: string) => {
  return createParam('body', data);
};
