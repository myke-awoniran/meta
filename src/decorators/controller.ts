import 'reflect-metadata';
import { Router } from 'express';

export const router = Router();

export function controller(routPrefix: string) {
  return function (target: Function) {
    for (const key in target.prototype) {
      const routeHandler = target.prototype.key;
      const path = Reflect.getMetadata('path', target.prototype, key);
      if (path) {
        router.get(`${routPrefix}${path}`, routeHandler);
      }
    }
  };
}
