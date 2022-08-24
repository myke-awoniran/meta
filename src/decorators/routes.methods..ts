import 'reflect-metadata';

function HttpMethod(method: string): Function {
  return function method(path: string): Function {
    return function (target: any, key: string, desc: PropertyDescriptor) {
      Reflect.defineMetadata('path', path, target, key);
    };
  };
}

export const get = HttpMethod('get');
export const post = HttpMethod('post');
export const patch = HttpMethod('patch');
export const del = HttpMethod('delete');
