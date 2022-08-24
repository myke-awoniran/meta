"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = exports.router = void 0;
require("reflect-metadata");
const express_1 = require("express");
exports.router = (0, express_1.Router)();
function controller(routPrefix) {
    return function (target) {
        for (const key in target.prototype) {
            const routeHandler = target.prototype.key;
            const path = Reflect.getMetadata('path', target.prototype, key);
            if (path) {
                exports.router.get(`${routPrefix}${path}`, routeHandler);
            }
        }
    };
}
exports.controller = controller;
