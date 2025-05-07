import { NextFunction, Request, Response, Router } from 'express';

export const Controller = (path: string) => {
  return (constructor: Function) => {
    const router: Router = Router();

    const prototype = constructor.prototype;

    prototype.path = path;

    console.log('-'.repeat(30));

    prototype.routes.map((route: { method: string; endPoint: string }) => {
      console.log({
        route: `${route.method} => ${prototype.path}${route.endPoint}`,
      });
    });

    console.log('-'.repeat(30));

    const routes: {
      endPoint: string;
      service: (req: Request, res: Response, next: NextFunction) => void;
      method: string;
    }[] = prototype.routes;

    for (const route of routes) {
      switch (route.method) {
        case 'get':
          router.get(route.endPoint, route.service);
          break;

        case 'post':
          router.post(route.endPoint, route.service);
          break;

        case 'delete':
          router.delete(route.endPoint, route.service);
          break;

        case 'patch':
          router.patch(route.endPoint, route.service);
          break;
      }
    }

    prototype.router = router;
  };
};
