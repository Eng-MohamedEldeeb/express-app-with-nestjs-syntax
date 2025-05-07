import { createParam } from '../factories/create-parameter-decorator.factory';

export const Param = (data?: string) => {
  return createParam('param', data);
};
