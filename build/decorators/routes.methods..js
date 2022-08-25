"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.del = exports.patch = exports.post = exports.get = void 0;
require("reflect-metadata");
const index_decorators_1 = require("./index.decorators");
function routeBinder(method) {
    return function (path) {
        return function (target, key, desc) {
            Reflect.defineMetadata(index_decorators_1.MetadataKeys.path, path, target, key);
            Reflect.defineMetadata(index_decorators_1.MetadataKeys.method, method, target, key);
        };
    };
}
exports.get = routeBinder(index_decorators_1.Methods.get);
exports.post = routeBinder(index_decorators_1.Methods.post);
exports.patch = routeBinder(index_decorators_1.Methods.patch);
exports.del = routeBinder(index_decorators_1.Methods.delete);
