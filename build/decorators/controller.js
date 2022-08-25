"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = void 0;
require("reflect-metadata");
const AppRouter_1 = require("../AppRouter");
function controller(routPrefix) {
    const router = AppRouter_1.AppRouter.getInstance();
    return function (target) {
        for (const key in target.prototype) {
            const routeHandler = target.prototype.key;
            const path = Reflect.getMetadata('path', target.prototype, key);
            if (path) {
                router.get(`${routPrefix}${path}`, routeHandler);
            }
        }
    };
}
exports.controller = controller;
