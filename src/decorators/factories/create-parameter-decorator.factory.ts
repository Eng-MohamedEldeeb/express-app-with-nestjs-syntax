export type ParamName = 'req' | 'body' | 'headers' | 'param';

export const createParam = (paramName: ParamName, data?: any) => {
  return (object: Object, methodName: string, index: number) => {
    const prototype = object.constructor.prototype;

    if (!prototype?.parameters) prototype.parameters = [];

    prototype.parameters.push({
      index,
      parameter: paramName,
      data,
    });
  };
};
