import 'reflect-metadata';
import { RequestHandler } from 'express';
import { MetadataKeys } from './enums.metadataKey';

function use(middleware: RequestHandler) {
  return function (target: Function, key: string, desc: PropertyDescriptor) {
    const middlewares =
      Reflect.getMetadata(MetadataKeys.middleware, target.prototype, key) || [];
    middlewares.push(middleware);

    Reflect.defineMetadata(
      MetadataKeys.middleware,
      [...middlewares, middleware],
      target.prototype,
      key
    );
  };
}
