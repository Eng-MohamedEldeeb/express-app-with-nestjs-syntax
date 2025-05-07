import { NextFunction, Request, Response } from 'express';
import { ParamName } from './create-parameter-decorator.factory';

type MethodTypes = 'get' | 'post' | 'patch' | 'put';

export const createMethodDecorator = (
  method: MethodTypes,
  endPoint: string
) => {
  return (object: Object, methodName: string, property: PropertyDescriptor) => {
    const prototype = object.constructor.prototype;

    const route: [] = prototype.routes;

    const parameters: { index: number; parameter: ParamName; data: any }[] =
      prototype.parameters;

    parameters.sort((a, b) => a.index - b.index);

    const originalFunction = property.value;

    property.value = function (
      req: Request,
      res: Response,
      next: NextFunction
    ) {
      const args = parameters.map(
        (e: { index: number; parameter: ParamName; data: any }) => {
          switch (e.parameter) {
            case 'req':
              if (e.data) return req[e.data as keyof Request];
              return req;

            case 'body':
              if (e.data) return req.body[e.data];
              return req.body;

            case 'headers':
              if (e.data) return req.headers[e.data];
              return req.headers;

            case 'param':
              if (e.data) return req.params[e.data];
              return req.params;

            default:
              return req;
          }
        }
      );

      switch (method) {
        case 'get':
          res.status(200).json(originalFunction.call(this, ...args));
          break;
        default:
          res
            .status(prototype.status || 201)
            .json(originalFunction.call(this, ...args));
          break;
      }
    };

    const apiData = {
      method,
      endPoint,
      service: property.value,
    };

    // console.log({ api: `${method} => ${endPoint}` });

    if (!route) prototype.routes = [];

    if (!route?.length) prototype.routes = [apiData];

    if (route?.length) prototype.routes = [...route, apiData];
  };
};
