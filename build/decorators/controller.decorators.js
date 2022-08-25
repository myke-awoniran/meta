"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = void 0;
require("reflect-metadata");
const AppRouter_1 = require("../AppRouter");
const index_decorators_1 = require("./index.decorators");
function controller(routPrefix) {
    // CREATING AN INSTANCE OF THE ROUTER CLASS
    const router = AppRouter_1.AppRouter.getInstance();
    return function (target) {
        // LOOPING THROUGH EACH METHOD OF THE OBJECT
        for (const key in target.prototype) {
            const routeHandler = target.prototype.key;
            // GETTING THE PATH
            const path = Reflect.getMetadata(index_decorators_1.MetadataKeys.path, target.prototype, key);
            // GETTING THE REQUEST HANDLER
            const method = Reflect.getMetadata(index_decorators_1.MetadataKeys.method, target.prototype, key);
            // DISPATCHING THE MIDDLEWARE ARRAY METADATA
            const middlewares = Reflect.getMetadata(index_decorators_1.MetadataKeys.middleware, target.prototype, key) ||
                [];
            // ATTACHING THE ROUTE TO THE HANDLER
            if (path) {
                router[method](`${routPrefix}${path}`, ...middlewares, routeHandler);
            }
        }
    };
}
exports.controller = controller;
