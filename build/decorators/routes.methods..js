"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.del = exports.patch = exports.post = exports.get = void 0;
require("reflect-metadata");
function HttpMethod(method) {
    return function method(path) {
        return function (target, key, desc) {
            Reflect.defineMetadata('path', path, target, key);
        };
    };
}
exports.get = HttpMethod('get');
exports.post = HttpMethod('post');
exports.patch = HttpMethod('patch');
exports.del = HttpMethod('delete');
