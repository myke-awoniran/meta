import 'reflect-metadata';
import { AppRouter } from '../AppRouter';
import { Methods, MetadataKeys } from './index.decorators';

export function controller(routPrefix: string) {
  // CREATING AN INSTANCE OF THE ROUTER CLASS

  const router = AppRouter.getInstance();
  return function (target: Function) {
    // LOOPING THROUGH EACH METHOD OF THE OBJECT

    for (const key in target.prototype) {
      const routeHandler = target.prototype.key;

      // GETTING THE PATH
      const path = Reflect.getMetadata(
        MetadataKeys.path,
        target.prototype,
        key
      );

      // GETTING THE REQUEST HANDLER
      const method: Methods = Reflect.getMetadata(
        MetadataKeys.method,
        target.prototype,
        key
      );

      // DISPATCHING THE MIDDLEWARE ARRAY METADATA
      const middlewares =
        Reflect.getMetadata(MetadataKeys.middleware, target.prototype, key) ||
        [];

      // ATTACHING THE ROUTE TO THE HANDLER
      if (path) {
        router[method](`${routPrefix}${path}`, ...middlewares, routeHandler);
      }
    }
  };
}
