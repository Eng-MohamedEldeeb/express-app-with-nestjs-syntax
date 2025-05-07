import { Request } from 'express';
import { createParam } from '../factories/create-parameter-decorator.factory';

export const Req = (data?: keyof Request) => {
  return createParam('req', data);
};
