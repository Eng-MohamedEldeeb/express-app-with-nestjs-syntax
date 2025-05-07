import { createParam } from '../factories/create-parameter-decorator.factory';
import { IncomingHttpHeaders } from 'http';

export const Headers = (data?: keyof IncomingHttpHeaders) => {
  return createParam('headers', data);
};
