export const HttpCode = (httpCode: number) => {
  return (object: Object, methodName: string, property: PropertyDescriptor) => {
    object.constructor.prototype.status = httpCode;
  };
};
